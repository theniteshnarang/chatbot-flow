import type { Node, NodeTypes } from "reactflow";
import { TextNode } from "./TextNode";

export enum CustomNode {
  text = "text-node",
}

export const initialNodes = [
  {
    id: "1",
    type: CustomNode.text,
    position: { x: 0, y: -200 },
    data: { label: "Send Message", message: "Text Message 1" },
  },
  {
    id: "2",
    type: CustomNode.text,
    position: { x: 300, y: -200 },
    data: { label: "Send Message", message: "Text Message 2" },
  },
] satisfies Node[];

export const nodeTypes = {
  "text-node": TextNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
