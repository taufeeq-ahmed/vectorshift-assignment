import { Position } from "reactflow";
import BaseNode from "./baseNode";
import NodeHandle from "./../components/NodeHandle";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode nodeType={"LLM"}>
      <NodeHandle
        type="target"
        position={"left"}
        id={`${id}-system`}
        customStyles={{ top: `${100 / 3}%` }}
      />
      <NodeHandle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        customStyles={{ top: `${200 / 3}%` }}
      />

      <div>
        <span>This is a LLM.</span>
      </div>

      <NodeHandle type="source" position={"right"} id={`${id}-response`} />
    </BaseNode>
  );
};
