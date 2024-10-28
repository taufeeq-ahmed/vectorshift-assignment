import React, { useState } from "react";
import BaseNode from "./baseNode";

function NoteNode() {
  const [text, setText] = useState("");
  return (
    <BaseNode
      nodeType={"LLM"}
      className="bg-[#fcfedd] border-none hover:shadow-none"
      showLabel={false}
    >
      <div>
        <textarea
          className="bg-[#fcfedd] focus:outline-none min-h-[120px]"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Type Here! ..."
        />
      </div>
    </BaseNode>
  );
}

export default NoteNode;
