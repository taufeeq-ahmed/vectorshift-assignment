// llmNode.js

import { Handle, Position } from "reactflow";
import BaseNode from "./baseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode nodeType={"LLM"}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{
          top: `${100 / 3}%`,
          background: "#cdcffc",
          width: "16px",
          height: "16px",
          border: "3px solid #6366f1",
          left: "-8px",
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{
          top: `${200 / 3}%`,
          background: "#cdcffc",
          width: "16px",
          height: "16px",
          border: "3px solid #6366f1",
          left: "-8px",
        }}
      />
      <div>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
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
