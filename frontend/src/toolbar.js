import { DraggableNode } from "./draggableNode";
import { SubmitButton } from "./submit";

export const PipelineToolbar = () => {
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
      <SubmitButton />
    </div>
  );
};
