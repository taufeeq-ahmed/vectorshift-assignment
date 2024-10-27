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
    <BaseNode nodeType={"Text"} className="relative">
      <Input
        type="text"
        value={currText}
        onChange={handleTextChange}
        id="text"
        label={"Text: "}
      />

      <div
        style={{
          minHeight: `${handles.length * 5}px`,
        }}
      >
        {handles.map((variable, index) => {
          const yPosition = (index + 1) / (handles.length + 1);

          return (
            <NodeHandle
              type="target"
              position="left"
              id={`${id}-${variable}-${index}`}
              customStyles={{ top: `calc(${yPosition * 100}%)` }}
            />
          );
        })}
      </div>
    </BaseNode>
  );
};
