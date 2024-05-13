import { Stack, TextField, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFlowStore, StoreState } from "../data";
import { useShallow } from "zustand/react/shallow";
import { ChangeEvent } from "react";

interface Props {
  data: {
    id: string;
    message: string;
  };
}
const selector = (state: StoreState) => ({
  nodes: state.nodes,
  setNodes: state.setNodes,
});

export const SettingsPanel = ({ data }: Props) => {
  // A global store to maintain the chatbot flow user interactions accross the app.
  const { nodes, setNodes } = useFlowStore(useShallow(selector));

  const onBack = () => {
    // Making the selected node, an unselected one.
    if (data.id) {
      const updatedNodes = nodes.map((node) =>
        node.id === data.id ? { ...node, selected: false } : node
      );
      setNodes(updatedNodes);
    }
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // On editing message, updating the required node with new message
    if (id) {
      const updatedNodes = nodes.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, message: value } }
          : node
      );
      setNodes(updatedNodes);
    }
  };

  return (
    <Box>
      <Stack
        sx={{ borderBottom: "5px solid", borderColor: "grey.100", p: 1 }}
        direction="row"
        alignItems="center"
      >
        <ArrowBackIcon onClick={onBack} />
        <Typography textAlign="center" variant="h5" width="100%">
          Message
        </Typography>
      </Stack>
      <Box p={1}>
        <Typography color="text.disabled" variant="h6">
          Text
        </Typography>
        <TextField
          id={data.id}
          fullWidth
          minRows={3}
          multiline
          onChange={onChange}
          value={data.message}
        />
      </Box>
    </Box>
  );
};
