import React from "react";
import BaseNode from "./baseNode";
import NodeHandle from "../components/NodeHandle";

export default function FileSaveNode({ id, data }) {
  return (
    <BaseNode nodeType={"FileSave"}>
      <NodeHandle type="target" position={"left"} id={`${id}-system`} />
      <div className="flex justify-center">
        <button className="border-[1px] px-2 py-1 rounded-lg mx-auto w-[100px]">
          Save
        </button>
      </div>
    </BaseNode>
  );
}
