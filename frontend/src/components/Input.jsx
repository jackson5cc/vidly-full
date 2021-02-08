import React from "react";
import "./Input.css";

function Input({ onChange, placeholder, value }) {
  return (
    <input
      onChange={onChange}
      className="Input"
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

export default Input;
