import React, { useState } from "react";
import Registration from "./Registration";
import RoutePlanner from "./RoutePlanner";
import SafetyCheck from "./SafetyCheck";

function App() {
  const [step, setStep] = useState("registration"); // registration -> journey -> safety
  const [tourist, setTourist] = useState(null);

  const handleRegistered = (data) => {
    setTourist(data);
    setStep("journey");
  };

  const handleStartJourney = () => {
    setStep("safety");
  };

  return (
    <>
      {step === "registration" && <Registration onRegistered={handleRegistered} />}
      {step === "journey" && <RoutePlanner tourist={tourist} onProceed={handleStartJourney} />}
      {step === "safety" && <SafetyCheck tourist={tourist} />}
    </>
  );
}

export default App;
