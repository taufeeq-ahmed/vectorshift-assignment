import React from "react";
import BaseNode from "./baseNode";
import NodeHandle from "../components/NodeHandle";

function TextToAudioNode({ id, data }) {
  return (
    <BaseNode nodeType={"Text to Audio"}>
      <NodeHandle type="target" position={"left"} id={`${id}-system`} />

      <div>
        <span>Text to Audio Conversion</span>
      </div>

      <NodeHandle type="source" position={"right"} id={`${id}-response`} />
    </BaseNode>
  );
}

export default TextToAudioNode;
