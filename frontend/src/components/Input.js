import React, { useEffect, useRef } from "react";

function Input({ value, onChange, label, type, id }) {
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  const handleChange = (e) => {
    onChange(e);
    adjustHeight();
  };

  const isExpandable = type === "text" || !type;

  return (
    <div className="flex flex-col gap-2 min-w-[200px]">
      <label className="text-regular" htmlFor={id}>
        {label}
      </label>
      {isExpandable ? (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          id={id}
          className="text-black focus:outline-none resize-none overflow-hidden min-h-[24px] py-1"
          rows={1}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          id={id}
          className="text-black focus:outline-none"
        />
      )}
    </div>
  );
}

export default Input;
