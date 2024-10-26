// submit.js

import { useStore } from "reactflow";
import { selector } from "./ui";
import { shallow } from "zustand/shallow";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);

  const handleSubmit = async () => {
    try {
    } catch (errror) {}
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
