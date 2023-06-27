import React from "react";

const TextField = ({ name, label, type, value, onChange, errors }) => {
  const getInputClasses = () => {
    return "form-control " + (errors ? "is-invalid" : "");
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <div className="input-group has-validation">
        <input
          className={getInputClasses()}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        {errors && <div className="invalid-feedback">{errors}</div>}
      </div>
    </div>
  );
};

export default TextField;
