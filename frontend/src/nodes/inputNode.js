import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode nodeType={"Input"}>
      <div className="flex flex-col gap-2">
        <div className="name-input flex flex-col gap-2 ">
          <label className="text-regular" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            id="name"
            className="text-black focus:outline-none"
          />
        </div>
        <div className="type-input flex flex-col gap-2">
          <label htmlFor="type">Type:</label>
          <select
            value={inputType}
            onChange={handleTypeChange}
            id="type"
            className="text-black focus:outline-none"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="output" // Changed to match the expected sourceHandle
        style={{
          background: "#cdcffc",
          width: "16px",
          height: "16px",
          border: "3px solid #6366f1",
          right: "-8px",
        }}
      />
    </BaseNode>
  );
};
