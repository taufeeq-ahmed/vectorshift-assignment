import React from "react";
import { Handle, Position } from "reactflow";

function NodeHandle({ type, position = "left", id, customStyles = {} }) {
  let nodeHandleStyles = {
    background: "#cdcffc",
    width: "16px",
    height: "16px",
    border: "3px solid #6366f1",
  };

  let nodeHandlePosition = Position.Left;

  if (position === "right") {
    nodeHandleStyles = { ...nodeHandleStyles, right: "-8px", ...customStyles };
    nodeHandlePosition = Position.Right;
  } else if (position === "left") {
    nodeHandleStyles = { ...nodeHandleStyles, left: "-8px", ...customStyles };
    nodeHandlePosition = Position.Left;
  }

  return (
    <Handle
      type={type}
      position={nodeHandlePosition}
      id={id}
      style={nodeHandleStyles}
    />
  );
}

export default NodeHandle;
