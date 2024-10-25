import React from "react";

function BaseNode({ nodeType, children }) {
  return (
    <div
      className="base-node"
      style={{ width: 200, height: 80, border: "1px solid black" }}
    >
      <div className="base-node-header">
        <span>{nodeType}</span>
      </div>
      <div className="base-node-content">{children}</div>
    </div>
  );
}

export default BaseNode;
