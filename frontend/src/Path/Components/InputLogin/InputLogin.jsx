import React, { forwardRef } from "react";
import "./style.css";

const InputLogin = forwardRef(({ onValueChange }, ref) => {
  const inputValidation = (e) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) {
      e.target.value = value.replace(/[^0-9]/g, "");
    } else {
      onValueChange(value);
    };
  };

  return (
    <div className="login-phone">
      <input
        type="tel"
        onChange={inputValidation}
        maxLength="10"
        inputMode="numeric"
        placeholder="Enter mobile number"
        className="login-phone__input"
        ref={ref}
      />
    </div>
  );
});

export default InputLogin;
