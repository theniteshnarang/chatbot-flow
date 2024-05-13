import { Box, Stack, Typography } from "@mui/material";
import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import { WhatsAppIcon, ChatIcon } from "../icons";

export type TextNodeData = {
  label?: string;
  message?: string;
};

export function TextNode({ data, selected }: NodeProps<TextNodeData>) {
  return (
    <Box
      sx={{
        width: "12rem",
        borderRadius: 1,
        minHeight: "5rem",
        boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.2)",
        ...(selected && { border: "1px solid", borderColor: "primary.main" }),
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
      <Typography p={1} pr={0} variant="caption">
        {data.message}
      </Typography>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Box>
  );
}
