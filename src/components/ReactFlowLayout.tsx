import { useCallback } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  useReactFlow,
} from "reactflow";
import { nodeTypes } from "../nodes";
import { Box } from "@mui/material";
import { useFlowStore, StoreState } from "../data";
import { useShallow } from "zustand/react/shallow";

type DragOverEvent = {
  preventDefault: () => void;
  dataTransfer: { dropEffect: string };
};

let id = 2;
const getId = () => `${++id}`;

const selector = (state: StoreState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setNodes: state.setNodes,
});

export const ReactFlowLayout = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setNodes } =
    useFlowStore(useShallow(selector));
  const reactFlowInstance = useReactFlow();

  // To trigger the drop effect on the react flow.
  const onDragOver = useCallback((event: DragOverEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // A drop callback trigger based on the reactFlowInstance for updating the nodes.
  const onDrop = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { getData: (arg0: string) => string };
      clientX: number;
      clientY: number;
    }) => {
      event.preventDefault();

      // getting the type data drom from the drop event.
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }
      const nodeId = getId();

      // getting new node drop positions based on reactFlowInstance
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: nodeId,
        type: type,
        position,
        data: { label: "Send Message", message: `Text message ${nodeId}` },
      };

      const updatedNodes = nodes.concat(newNode);
      setNodes(updatedNodes);
    },
    [reactFlowInstance, nodes, setNodes]
  );

  return (
    <Box width="75vw">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onDragOver={onDragOver}
        onDrop={onDrop}
        fitView
      >
        <Background variant={BackgroundVariant.Cross} gap={12} size={1} />
      </ReactFlow>
    </Box>
  );
};
