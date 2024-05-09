import type { Edge, EdgeTypes } from "reactflow";

// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export const initialEdges = [
  { id: "1-2", source: "1", target: "2" },
  // { id: "b->d", source: "b", target: "d" },
  // { id: "c->d", source: "c", target: "d", animated: true },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
