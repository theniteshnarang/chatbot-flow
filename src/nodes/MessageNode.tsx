import { Box, Typography } from "@mui/material";
import type { NodeProps } from "reactflow";
import { ChatIcon } from "../icons";
// import { Handle, Position } from "reactflow";

export type MessageNodeData = {
  label?: string;
};

export function MessageNode({ data }: NodeProps<MessageNodeData>) {
  //   const x = `${Math.round(xPos)}px`;
  //   const y = `${Math.round(yPos)}px`;
  console.log({ data }, "to dekho");
  return (
    <Box
      className="react-flow__node-default"
      sx={{ borderColor: "primary.main" }}
    >
      <ChatIcon sx={{ color: "primary.main" }} />
      <Typography color="primary.main">Message</Typography>
    </Box>
  );
}
