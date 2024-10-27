import { useState, useEffect } from "react";
import BaseNode from "./baseNode";
import Input from "./../components/Input";
import NodeHandle from "../components/NodeHandle";
import { useStore } from "./../store";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState(["input"]);
  const { updateNodeField } = useStore((state) => state);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    updateNodeField(id, "text", newText);
  };

  const extractVariables = (text) => {
    const regex = /\{\{(.*?)\}\}/g;
    const variables = [
      ...new Set([...text.matchAll(regex)].map((match) => match[1])),
    ];
    setHandles(variables);
  };

  useEffect(() => {
    extractVariables(currText);
  }, [currText]);

  return (
    <BaseNode nodeType={"Text"}>
      <Input
        type="text"
        value={currText}
        onChange={handleTextChange}
        id="text"
        label={"Text: "}
      />
      {handles.map((variable, index) => {
        const yPos = (index + 1) / (handles.length + 1);
        const uniqueHandleId = `${id}-${index}`;

        return (
          <NodeHandle
            key={variable}
            type="target"
            position={"left"}
            id={uniqueHandleId}
            customStyles={{
              top: `${yPos * 100}%`,
              backgroundColor: index === 0 ? "blue" : "red", // Temporary debug color
            }}
          />
        );
      })}
    </BaseNode>
  );
};
