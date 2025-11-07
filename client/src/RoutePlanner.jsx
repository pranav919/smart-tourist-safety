import React from "react";

/* curated places: each item includes bestTime, safety, tip */
const cities = {
  Varanasi: [
    { name: "Dashashwamedh Ghat", bestTime: "Sunset (5–7 PM)", safety: "Busy - Crowded", tip: "Arrive before Aarti starts; avoid heavy crowds during festival days." },
    { name: "Kashi Vishwanath Temple", bestTime: "Early Morning (5–9 AM)", safety: "Safe", tip: "Security checks; keep valuables in front pouch." },
    { name: "Sarnath", bestTime: "Morning (9–11 AM)", safety: "Safe", tip: "Good for calm walks; carry water." },
    { name: "Manikarnika Ghat", bestTime: "Daytime (10 AM – 4 PM)", safety: "Caution (sacred area)", tip: "Respect local norms; avoid photographing certain rituals." },
    { name: "Banaras Hindu University (BHU)", bestTime: "Afternoon", safety: "Safe", tip: "Large campus, pleasant walks." },
    { name: "Local Bazaar (Chowk)", bestTime: "Afternoon (1–5 PM)", safety: "Pickpocket risk", tip: "Bargain smartly; keep small change." },
  ],
  Jaipur: [
    { name: "Amber Fort", bestTime: "Morning (8–11 AM)", safety: "Safe (hilly)", tip: "Wear comfortable shoes; avoid midday heat." },
    { name: "Hawa Mahal", bestTime: "Morning", safety: "Safe", tip: "Best photos early morning." },
    { name: "City Palace", bestTime: "Late Morning", safety: "Safe", tip: "Guided tours available." },
    { name: "Jantar Mantar", bestTime: "Morning", safety: "Safe", tip: "Short visit, great for history lovers." },
    { name: "Nahargarh Fort", bestTime: "Sunset", safety: "Safe (steep roads)", tip: "Great sunset view; keep water." },
    { name: "Local Bazaars (Johari)", bestTime: "Afternoon", safety: "Crowded", tip: "Bargain and watch belongings." },
  ],
  Delhi: [
    { name: "Red Fort", bestTime: "Morning", safety: "Safe", tip: "Arrive early to avoid queues." },
    { name: "Qutub Minar", bestTime: "Morning", safety: "Safe", tip: "Good photography spot." },
    { name: "India Gate", bestTime: "Evening", safety: "Safe", tip: "Popular in evenings; food stalls around." },
    { name: "Humayun's Tomb", bestTime: "Morning", safety: "Safe", tip: "Beautiful gardens; peaceful." },
    { name: "Connaught Place", bestTime: "Afternoon/Evening", safety: "Busy", tip: "Shopping & dining hub." },
    { name: "Lotus Temple", bestTime: "Morning/Afternoon", safety: "Safe", tip: "Quiet and meditative." },
  ],
  Mumbai: [
    { name: "Gateway of India", bestTime: "Morning/Early Evening", safety: "Crowded", tip: "Watch your belongings; boats available." },
    { name: "Marine Drive", bestTime: "Sunset", safety: "Safe", tip: "Great for evening walks." },
    { name: "Chhatrapati Shivaji Terminus", bestTime: "Daytime", safety: "Crowded", tip: "Architectural marvel; avoid rush hours." },
    { name: "Colaba Causeway", bestTime: "Afternoon", safety: "Busy", tip: "Street shopping & cafes." },
    { name: "Sanjay Gandhi National Park", bestTime: "Morning", safety: "Safe", tip: "Nature escape from the city." },
    { name: "Haji Ali Dargah", bestTime: "Morning", safety: "Safe", tip: "Tidal access; check timings." },
  ],
  Goa: [
    { name: "Calangute Beach", bestTime: "Daytime", safety: "Busy/Crowded", tip: "Party spot; keep valuables safe." },
    { name: "Baga Beach", bestTime: "Evening", safety: "Busy", tip: "Great for nightlife." },
    { name: "Anjuna Flea Market", bestTime: "Morning/Noon", safety: "Safe", tip: "Good for souvenirs; bargain." },
    { name: "Dudhsagar Falls", bestTime: "Morning", safety: "Safe (trek)", tip: "Day trip from Goa; wear good shoes." },
    { name: "Old Goa Churches", bestTime: "Morning", safety: "Safe", tip: "Cultural & historical visit." },
    { name: "Palolem Beach", bestTime: "Sunset", safety: "Calm", tip: "Relaxing vibe; quieter than northern beaches." },
  ],
};

export default function RoutePlanner({ tourist, onProceed }) {
  const selectedCity = tourist?.city || "";
  const places = cities[selectedCity] || [];

  return (
    <div style={outer}>
      <style>{`
        @keyframes fadeUp { from {transform:translateY(12px);opacity:0} to {transform:translateY(0);opacity:1} }
        .cardAnim { animation: fadeUp 420ms ease both; }
      `}</style>

      <div style={panel}>
        <h1 style={{margin:0, color:"#8B3E00"}}>🌍 My Journey</h1>
        <p style={{color:"#5b3a1a", marginTop:8}}>Welcome, <strong>{tourist?.name}</strong> — planning for <strong>{selectedCity || "your city"}</strong>.</p>

        <div style={listWrap}>
          {places.length > 0 ? places.map((p, i) => (
            <div key={i} className="cardAnim" style={{...placeCard, animationDelay: `${i*50}ms`}}>
              <h3 style={{margin:"0 0 6px 0", color:"#c04a00"}}>📍 {p.name}</h3>
              <p style={{margin:"0 0 6px 0", color:"#4d3a2b"}}>{p.description || ""}</p>
              <p style={{margin:"0 0 4px 0", fontSize:13}}><strong>🕒 Best time:</strong> {p.bestTime}</p>
              <p style={{margin:"0 0 6px 0", fontSize:13}}><strong>🔒 Safety:</strong> {p.safety}</p>
              <p style={{margin:0, fontSize:13, color:"#6b4d2b"}}><strong>Tip:</strong> {p.tip}</p>
            </div>
          )) : (
            <div style={{textAlign:"center", color:"#5b3a1a"}}>No curated places for this city yet. You can still proceed to plan your journey.</div>
          )}
        </div>

        <div style={{marginTop:14, display:"flex", gap:10, justifyContent:"center"}}>
          <button onClick={onProceed} style={startBtn}>🚶‍♂️ Start My Journey</button>
        </div>
      </div>
    </div>
  );
}

/* styles */
const outer = {
  minHeight: "100vh",
  background: "linear-gradient(135deg,#FFF3E6,#FFD9B3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 28,
  fontFamily: "'Poppins', sans-serif",
};

const panel = {
  width: "92%",
  maxWidth: 900,
  background: "rgba(255,255,255,0.96)",
  borderRadius: 16,
  padding: 22,
  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  textAlign: "left",
};

const listWrap = {
  marginTop: 14,
  maxHeight: 420,
  overflowY: "auto",
  paddingRight: 8,
};

const placeCard = {
  background: "linear-gradient(180deg,#fffaf1,#fff3e8)",
  borderRadius: 12,
  padding: 14,
  marginBottom: 12,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const startBtn = {
  background: "linear-gradient(90deg,#ff8b2d,#ff6f00)",
  border: "none",
  color: "white",
  padding: "10px 16px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
};
