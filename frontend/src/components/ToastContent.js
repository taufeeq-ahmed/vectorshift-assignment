import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";

const ToastContent = ({ numNodes, numEdges, isDag }) => {
  return (
    <div
      className="bg-white flex gap-2 p-2   rounded-lg items-center
      min-w-[360px]  text-black px-4"
      style={{
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
      }}
    >
      <div className="icon">
        {isDag ? (
          <CircleCheck size={30} className="text-emerald-400" />
        ) : (
          <CircleX size={30} className="text-red-400" />
        )}
      </div>
      <div className="toast-content">
        <div className="flex items-center gap-2 font-semibold">
          The Pipeline is {isDag ? "a DAG" : "not a DAG"}
        </div>
        <div className="pipeline-details flex font-semibold w-full items-center opacity-55 gap-2 text-sm ">
          <span>Nodes : {numNodes}</span>
          <span>Edges : {numEdges}</span>
        </div>
      </div>
    </div>
  );
};

export default ToastContent;
