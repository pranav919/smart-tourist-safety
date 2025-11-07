import React, { useState } from "react";
import "./styles/Registration.css";



const Registration = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.city) return alert("Please fill all details!");
    const blockId = "KR-" + Math.floor(10000 + Math.random() * 90000);
    onRegister({ ...formData, blockId });
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1>🙏 Namaste, Traveler!</h1>
        <p>Begin your soulful journey across India's timeless cities.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            min="1950-01-01"
            max="2030-12-31"
          />

          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select your city</option>
            <option value="Varanasi">Varanasi</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Goa">Goa</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Agra">Agra</option>
            <option value="Ayodhya">Ayodhya</option>
          </select>

          <button type="submit">✨ Generate Block ID</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
