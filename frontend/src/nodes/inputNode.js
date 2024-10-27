import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./baseNode";
import Input from "../components/Input";
import Select from "../components/Select";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const fileTypeOptions = [
    { value: "Text", label: "Text" },
    { value: "File", label: "File" },
  ];

  return (
    <BaseNode nodeType={"Input"}>
      <div className="flex flex-col gap-2">
        <Input
          label={"Name:"}
          value={currName}
          onChange={handleNameChange}
          id={"name"}
          type={"text"}
        />
        <Select
          options={fileTypeOptions}
          value={inputType}
          onChange={handleTypeChange}
          label={"Type: "}
          id={"type"}
        />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="output" // Changed to match the expected sourceHandle
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
