import React, { useState } from "react";

export default function Registration({ onRegistered }) {
  const [form, setForm] = useState({
    name: "",
    country: "",
    phone: "",
    idProof: "",
    dob: "",
    city: "",
  });
  const [blockId, setBlockId] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, country, phone, idProof, dob, city } = form;
    if (!name || !country || !phone || !idProof || !dob || !city) {
      alert("Please fill all details");
      return;
    }

    const uniqueId = "KR-" + Math.floor(10000 + Math.random() * 90000);
    setBlockId(uniqueId);
    setRegistered(true);
    if (onRegistered) onRegistered({ ...form, blockId: uniqueId });
  };

  if (registered) {
    return (
      <div style={rootStyle}>
        <div style={cardStyle}>
          <h2>🎉 Registration Successful</h2>
          <p>
            Welcome, <strong>{form.name}</strong> from {form.country}
          </p>
          <h3 style={{ color: "#ff6f00" }}>Your Block ID: {blockId}</h3>
          <button onClick={() => onRegistered({ ...form, blockId })} style={buttonStyle}>
            Proceed to Safety Check →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={rootStyle}>
      <div style={cardStyle}>
        <h1 style={{ color: "#3b1f04" }}>🙏 Namaste Tourist</h1>
        <p style={{ color: "#6b4d2b" }}>Enter your details to get a Block ID</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={form.dob}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="country"
            placeholder="Country of Origin"
            value={form.country}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="idProof"
            placeholder="Aadhaar / Passport / Other ID"
            value={form.idProof}
            onChange={handleChange}
            style={inputStyle}
          />
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">-- Select City to Visit --</option>
            <option value="Varanasi">Varanasi</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
          </select>
          <button type="submit" style={buttonStyle}>
            Generate Block ID
          </button>
        </form>
      </div>
    </div>
  );
}

const rootStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(135deg, rgba(255,156,66,0.9), rgba(255,111,0,0.85)), url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1500&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  fontFamily: "'Poppins', sans-serif",
};

const cardStyle = {
  background: "rgba(255,255,255,0.92)",
  padding: "30px 35px",
  borderRadius: 20,
  boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
  textAlign: "center",
  width: 400,
  maxWidth: "90%",
};

const inputStyle = {
  padding: "10px",
  borderRadius: 10,
  border: "1px solid #ddd",
  fontSize: 15,
  textAlign: "center",
};

const buttonStyle = {
  background: "#ff6f00",
  color: "white",
  border: "none",
  padding: "10px 12px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 600,
};