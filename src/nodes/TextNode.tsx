import { Box, Stack, Typography } from "@mui/material";
import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import { WhatsAppIcon, ChatIcon } from "../icons";

export type TextNodeData = {
  label?: string;
  message?: string;
};

export function TextNode({ data, ...props }: NodeProps<TextNodeData>) {
  // const x = `${Math.round(xPos)}px`;
  // const y = `${Math.round(yPos)}px`;
  console.log({ props });

  return (
    <Box
      sx={{
        width: "12rem",
        borderRadius: 1,
        height: "4rem",
        boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: "secondary.main",
          px: 1,
          py: 0.5,
          borderRadius: "4px 4px 0px 0px",
        }}
      >
        <ChatIcon fontSize="small" />
        <Typography width="100%" pl={0.5} variant="subtitle2">
          {data.label}
        </Typography>
        <WhatsAppIcon fontSize="small" htmlColor="green.400" />
      </Stack>
      <Typography pl={1} pt={1} variant="caption">
        {data.message}
      </Typography>
      {/* We add this class to use the same styles as React Flow's default nodes. */}
      {/* <div className="react-flow__node-default"> */}

      {/* {data.label && <div>{data.label}</div>} */}
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Right} />
    </Box>
  );
}
