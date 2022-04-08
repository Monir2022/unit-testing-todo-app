//NPM packages
import { useState } from "react";

export default function InputField({ settings, state, validation }) {
  const { label, max, min, placeholder, required, type } = settings;
  const [getter, setter] = state;
  const [errorMessage, setErrorMessage] = useState(" ");

//Methods
  function onValidate(callback, setState, setError) {
    const result = callback(getter);
    setState(result.data);
    setError(result.error);
  }

  return (
    <label className="input-field">
      {label}
      <input
        onBlur={() => onValidate(validation, setter, setErrorMessage)}
        onChange={(event) => setter(event.target.value)}
        max={max}
        min={min}
        placeholder={placeholder}
        required={required}
        type={type}
        value={getter}
      />
      <small className="message">{errorMessage}</small>
    </label>
  );
}
