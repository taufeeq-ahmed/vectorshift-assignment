import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { ReactFlowProvider } from "reactflow";
import { Toaster } from "sonner";

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <ReactFlowProvider>
        <PipelineToolbar />
        <PipelineUI />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
