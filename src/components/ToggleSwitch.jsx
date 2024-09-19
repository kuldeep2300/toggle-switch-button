import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";


export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const isToggleOn = isOn ? "on" : "off";
  const toggleBgColor = { backgroundColor: isOn ? "#4caf50" : "" };

  return (
    <>
    <h1 style={{color: "000", textAlign: "center", marginBottom: "2rem", fontSize: "3rem"}}
    >Toggle Switch : <IoIosSwitch /> </h1>
    <div
      className="toggle-switch"
      style={toggleBgColor}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${isToggleOn}`}>
        <span className="switch-state"> {isToggleOn} </span>
      </div>
    </div>
    </>
  );
};
