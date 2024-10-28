import { useState } from "react";

import BaseNode from "./baseNode";
import Input from "../components/Input";
import Select from "../components/Select";
import NodeHandle from "../components/NodeHandle";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const fileTypeOptions = [
    { value: "Text", label: "Text" },
    { value: "File", label: "File" },
  ];

  return (
    <BaseNode nodeType="Output">
      <NodeHandle type="target" position={"right"} id={`${id}-value`} />

      <div className="flex flex-col gap-2">
        <Input
          type="text"
          value={currName}
          onChange={handleNameChange}
          id="name"
          label={"Name: "}
        />
        <Select
          options={fileTypeOptions}
          value={outputType}
          onChange={handleTypeChange}
          id="type"
          label={"Type: "}
        />
      </div>
    </BaseNode>
  );
};
