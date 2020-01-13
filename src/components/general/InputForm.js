import React from "react";

const InputForm = ({ labelhead, value, onChange, type, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{labelhead}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
};

const styles = {
  auth: {
    color: "black",
    width: "60%",
    height: "90%"
  }
};

export { InputForm };
