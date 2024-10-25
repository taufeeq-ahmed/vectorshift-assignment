// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./baseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode nodeType="Output">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{
          background: "#cdcffc",
          width: "16px",
          height: "16px",
          border: "3px solid #6366f1",
          left: "-8px",
        }}
      />

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
            value={outputType}
            onChange={handleTypeChange}
            id="type"
            className="text-black focus:outline-none"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
