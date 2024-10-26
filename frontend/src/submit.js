import { useStore } from "./store";
import { selector } from "./ui";
import { shallow } from "zustand/shallow";
import axios from "axios";

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
