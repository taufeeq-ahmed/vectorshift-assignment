// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode nodeType={"Text"}>
      <div className="flex flex-col gap-2">
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          value={currText}
          onChange={handleTextChange}
          id="text"
          className="text-black focus:outline-none"
        />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
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
