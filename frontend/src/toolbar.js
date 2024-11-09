import { useState } from "react";
import { DraggableNode } from "./draggableNode";
import { useStore } from "./store";
import { SubmitButton } from "./submit";
import { selector } from "./ui";

export const PipelineToolbar = () => {
  const { nodes } = useStore(selector);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [inputs, setInputs] = useState(0);
  const [outputs, setOutputs] = useState(0);

  const handleCountButtonClick = () => {
    let nInputs = 0;
    let nOutputs = 0;
    nodes.forEach((node) => {
      if (node.type === "customInput") {
        nInputs += 1;
      }
      if (node.type === "customOutput") {
        nOutputs += 1;
      }
    });

    

    setInputs(nInputs);
    setOutputs(nOutputs);

    setIsModalOpen(true);
  };

  return (
    <div className="flex justify-between shadow-custom items-center p-4">
      <div className="mt-1 flex gap-2">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="fileSave" label="File Save" />
        <DraggableNode type="transform" label="Transform" />
        <DraggableNode type="note" label="Note" />
        <DraggableNode type="textToAudio" label="Note" />
        <DraggableNode type="audio" label="Audio" />
      </div>
      <div className="flex gap-1">
        <SubmitButton />
        <div className="count-button" onClick={handleCountButtonClick}>
          <button className="border-[1px] flex gap-1 h-fit p-2 rounded-lg justify-center items-center hover:bg-[#efefef]">
            Count
          </button>
        </div>
        <div className="modal">
          <dialog open={isModalOpen} className="p-2 shadow-lg rounded-md">
            <div className="content">
              <div className="left">
                {inputs.map(() => {
                  return <h3>input</h3>;
                })}
              </div>
              <div className="right">
                {outputs.map(() => {
                  return <h3>output</h3>;
                })}
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};
