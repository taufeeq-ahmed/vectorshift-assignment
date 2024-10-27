import React from "react";

function Input({ value, onChange, label, type, id }) {
  return (
    <div className="name-input flex flex-col gap-2 ">
      <label className="text-regular" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        className="text-black focus:outline-none"
      />
    </div>
  );
}

export default Input;
