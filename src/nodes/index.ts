import type { Node, NodeTypes } from "reactflow";
import { TextNode } from "./TextNode";
import { MessageNode } from "./MessageNode";

// const initialNodes = [
//   { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
//   { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
// ];

export const initialNodes = [
  {
    id: "1",
    type: "text-node",
    position: { x: 0, y: -200 },
    data: { label: "Send Message", message: "Text Message 1" },
  },
  {
    id: "2",
    type: "text-node",
    position: { x: 300, y: -200 },
    data: { label: "Send Message", message: "Text Message 2" },
  },
  {
    id: "3",
    type: "message-node",
    position: { x: 0, y: 0 },
    data: { label: "Message Node!", message: "" },
  },
] satisfies Node[];

export const nodeTypes = {
  "text-node": TextNode,
  "message-node": MessageNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
