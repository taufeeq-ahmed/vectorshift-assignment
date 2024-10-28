import React from "react";
import BaseNode from "./baseNode";
import NodeHandle from "../components/NodeHandle";

function TransformNode({ id, data }) {
  return (
    <BaseNode nodeType={"Transform"}>
      <NodeHandle type="target" position={"left"} id={`${id}-system`} />
      <div>
        <span>Transform</span>
        {/* Transform LOgic goes here  */}
      </div>
      <NodeHandle type="source" position={"right"} id={`${id}-response`} />
    </BaseNode>
  );
}

export default TransformNode;
