import { useStore } from "./store";
import { selector } from "./ui";
import { shallow } from "zustand/shallow";
import axios from "axios";
import PlayIcon from "./icons/PlayIcon";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    const graphData = {
      nodes,
      edges,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8000/check-dag",
        graphData
      );
      console.log("RESPONSE IS : ", data);
    } catch (errror) {
      console.log("ERROR IN BACKEND :", errror);
    }
  };

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="border-[1px] flex h-fit p-2 rounded-lg justify-center items-center hover:bg-[#efefef]"
    >
      <PlayIcon className="w-5 h-5" />
      Submit
    </button>
  );
};
