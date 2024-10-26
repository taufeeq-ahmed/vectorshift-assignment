import { useState, useEffect } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    extractVariables(e.target.value);
  };

  const extractVariables = (text) => {
    const regex = /\{\{(.*?)\}\}/g;
    const variables = [
      ...new Set([...text.matchAll(regex)].map((match) => match[1])),
    ];
    setHandles(variables);
  };

  useEffect(() => {
    extractVariables(currText);
  }, []);

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
      {handles.map((variable, index) => {
        const yPos = (index + 1) / (handles.length + 1);
        return (
          <Handle
            key={`${id}-${variable}-${index}`}
            type="source"
            position={Position.Left}
            id={`${id}-${variable}`}
            style={{
              background: "#cdcffc",
              width: "16px",
              height: "16px",
              border: "3px solid #6366f1",
              left: "-8px",
              top: `${yPos * 100}%`,
            }}
          />
        );
      })}
    </BaseNode>
  );
};
