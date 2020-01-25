import React from "react";

const InputForm = ({
  labelhead,
  value,
  onChange,
  type,
  placeholder,
  pattern
}) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{labelhead}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="form-control"
        placeholder={placeholder}
        pattern={pattern}
      />
    </div>
  );
};

export { InputForm };
