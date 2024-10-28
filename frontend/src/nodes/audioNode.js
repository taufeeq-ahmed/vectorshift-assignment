import React from "react";
import NodeHandle from "../components/NodeHandle";
import BaseNode from "./baseNode";
import { Music } from "lucide-react";

function AudioNode({ id, data }) {
  return (
    <BaseNode nodeType={"Audio"} showLabel={false} className="min-w-fit">
      <NodeHandle type="target" position={"left"} id={`${id}-system`} />
      <div>
        <span>
          <Music className="w-5 h-5" />
        </span>
      </div>
    </BaseNode>
  );
}

export default AudioNode;
