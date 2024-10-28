import { twMerge } from "tailwind-merge";
import InputIcon from "./icons/InputIcon";
import LlmIcon from "./icons/LlmIcon";
import OutputIcon from "./icons/OutputIcon";
import TextIcon from "./icons/TextIcon";
import FileIcon from "./icons/FileIcon";

const iconMap = {
  customInput: (props) => <InputIcon {...props} />,
  llm: (props) => <LlmIcon {...props} />,
  customOutput: (props) => <OutputIcon {...props} />,
  text: (props) => <TextIcon {...props} />,
  fileSave: (props) => <FileIcon {...props} />,
};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const Icon = iconMap[type];

  return (
    <div
      className={twMerge(
        type,
        "p-2 border-[1px] flex flex-col gap-1 justify-center items-center w-[62px] h-[62px] rounded-lg hover:bg-[#efefef]"
      )}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
      }}
      draggable
    >
      <span className="text-[#6e6c8b] text-[10px] flex justify-center items-center flex-col">
        <Icon className="w-6 h-6" fill="#6e6c8b" />
        {label}
      </span>
    </div>
  );
};
