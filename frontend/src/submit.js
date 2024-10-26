import { useStore } from "./store";
import { selector } from "./ui";
import { shallow } from "zustand/shallow";
import axios from "axios";
import PlayIcon from "./icons/PlayIcon";
import { toast } from "sonner";
import ToastContent from "./components/ToastContent";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    const graphData = {
      nodes,
      edges,
    };

    if (!nodes || !nodes.length) {
      toast.warning("There are no nodes to validate");
      return;
    }

    if (!edges || !edges.length) {
      toast.warning("There are no connections to validate");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8000/check-dag",
        graphData
      );
      const { num_nodes: numNodes, num_edges: numEdges, is_dag: isDag } = data;

      toast.custom(() => (
        <ToastContent numNodes={numNodes} numEdges={numEdges} isDag={isDag} />
      ));
    } catch (errror) {
      console.log("ERROR IN BACKEND :", errror);
    }
  };

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="border-[1px] flex gap-1 h-fit p-2 rounded-lg justify-center items-center hover:bg-[#efefef]"
    >
      <PlayIcon className="w-5 h-5" />
      <div className="text-[#6e6c8b]">Submit</div>
    </button>
  );
};
