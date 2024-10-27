import { useState, useEffect } from "react";
import BaseNode from "./baseNode";
import Input from "./../components/Input";
import NodeHandle from "../components/NodeHandle";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    extractVariables(e.target.value);
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
  }, []);

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
        return (
          <NodeHandle
            key={variable}
            type="target"
            position={"left"}
            id={`${id}-${variable}`}
            customStyles={{ top: `${yPos * 100}%` }}
          />
        );
      })}
    </BaseNode>
  );
};
