import { create } from "zustand";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import { initialEdges } from "../edges";
import { initialNodes } from "../nodes";
import { LocalStorageKeys, getDataInLocalStorage } from "../util/localStorage";

export type OptionsState = {
  isSelectable?: boolean;
};

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  setOptions: (options: OptionsState) => void;
};

export type StoreState = RFState & OptionsState;

const storedData = getDataInLocalStorage(LocalStorageKeys.nodesEdges);

// this is our useFlowStore hook that we can use in our components to get parts of the store and call actions
export const useFlowStore = create<StoreState>((set, get) => ({
  nodes: storedData?.nodes || initialNodes,
  edges: storedData?.edges || initialEdges,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes: Node[]) => {
    set({ nodes });
  },
  setEdges: (edges: Edge[]) => {
    set({ edges });
  },
  setOptions: (options: OptionsState) => {
    set({ ...options });
  },
}));
