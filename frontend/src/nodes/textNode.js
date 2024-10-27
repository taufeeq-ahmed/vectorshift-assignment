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
      <div
        className="relative"
        style={{
          minHeight: `${handles.length * 50}px`,
          marginTop: "20px",
          position: "relative",
        }}
      >
        {handles.map((variable, index) => {
          const yPosition = 25 + index * 50;

          return (
            <div
              key={`${id}-${variable}`}
              style={{
                position: "absolute",
                left: "0px",
                top: `${yPosition}px`,
                height: "20px",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <NodeHandle
                type="target"
                position="left"
                id={`${id}-${variable}-${index}`}
              />
            </div>
          );
        })}
      </div>
    </BaseNode>
  );
};
