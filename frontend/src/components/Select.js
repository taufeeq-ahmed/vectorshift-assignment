import React from "react";

function Select({ value, onChange, id, label, options }) {
  return (
    <div className="type-input flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <select
        value={value}
        onChange={onChange}
        id={id}
        className="text-black focus:outline-none"
      >
        {options?.map(({ value, label }) => {
          return (
            <option value={value} key={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
