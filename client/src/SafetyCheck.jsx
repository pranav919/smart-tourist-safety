import React, { useState, useEffect } from "react";

export default function SafetyCheck({ tourist }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // attempt auto fetch once
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLatitude(pos.coords.latitude.toFixed(4));
          setLongitude(pos.coords.longitude.toFixed(4));
        },
        () => {}
      );
    }
  }, []);

  const handleFetchLocation = () => {
    if (!navigator.geolocation) { alert("Geolocation not supported"); return; }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLatitude(pos.coords.latitude.toFixed(4));
        setLongitude(pos.coords.longitude.toFixed(4));
      },
      (err) => { console.error(err); alert("Please allow location access"); }
    );
  };

  const handleCheckSafety = async () => {
    if (!latitude || !longitude) { alert("Please fetch location first"); return; }
    try {
      setLoading(true);
      const resp = await fetch("http://localhost:5000/api/safety/check", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) })
      });
      const data = await resp.json();
      setResult(data.message || "No response");
    } catch (err) {
      console.error(err);
      setResult("Error checking safety");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={root}>
      <div style={card}>
        <h2 style={{color:"#c25a00", margin:0}}>Welcome, {tourist?.name || "Traveler"} 🌏</h2>
        <p style={{color:"#5b3a1a", marginTop:8}}>Your Block ID: <strong>{tourist?.blockId}</strong></p>

        <div style={{display:"flex", gap:10, marginTop:14, justifyContent:"center"}}>
          <button onClick={handleFetchLocation} style={fetchBtn}>📍 Fetch My Location</button>
          <button onClick={handleCheckSafety} style={checkBtn}>{loading ? "Checking..." : "🔒 Check Safety"}</button>
        </div>

        <div style={{marginTop:12, textAlign:"center"}}>
          <p style={{margin:6}}><strong>Latitude:</strong> {latitude || "—"}</p>
          <p style={{margin:6}}><strong>Longitude:</strong> {longitude || "—"}</p>
        </div>

        {result && (
          <div style={{
            marginTop:14,
            padding:12,
            borderRadius:10,
            background: result.toLowerCase().includes("safe") ? "#e9fff1" : "#fff0f0",
            color: result.toLowerCase().includes("safe") ? "#0b6b3a" : "#8b1b1b",
            fontWeight:700,
            textAlign:"center"
          }}>
            {result}
          </div>
        )}

        <p style={{marginTop:12, fontSize:13, color:"#6b4d2b", textAlign:"center"}}>If you feel unsafe, press the SOS on the next update. This is a prototype — live alerts come later.</p>
      </div>
    </div>
  );
}

const root = {
  minHeight: "100vh",
  background: "linear-gradient(135deg,#FFF3E6,#FFD9B3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  fontFamily: "'Poppins', sans-serif"
};

const card = {
  width: 420,
  maxWidth: "95%",
  background: "white",
  padding: 26,
  borderRadius: 14,
  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  textAlign: "center"
};

const fetchBtn = {
  background: "#22c55e",
  color: "white",
  border: "none",
  padding: "10px 12px",
  borderRadius: 8,
  cursor: "pointer",
};

const checkBtn = {
  background: "linear-gradient(90deg,#ff8b2d,#ff6f00)",
  color: "white",
  border: "none",
  padding: "10px 12px",
  borderRadius: 8,
  cursor: "pointer",
};
