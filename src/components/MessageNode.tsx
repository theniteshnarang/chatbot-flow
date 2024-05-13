import { Box, Typography } from "@mui/material";

import { ChatIcon } from "../icons";
import { DragEvent } from "react";
import { CustomNode } from "../nodes";

export const MessageNode = () => {
  // Using dragevent to implement the drag functionality
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    // A nodeType is passed on to the drag-start event to be catched by the drop-end event later.
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Box
      className="react-flow__node-default dndnode"
      sx={{ borderColor: "primary.main" }}
      draggable // Making the element draggable through HTML drag and drop API
      onDragStart={(event) => onDragStart(event, CustomNode.text)}
    >
      <ChatIcon sx={{ color: "primary.main" }} />
      <Typography color="primary.main">Message</Typography>
    </Box>
  );
};
