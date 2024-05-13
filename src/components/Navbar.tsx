import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useFlowStore, StoreState } from "../data";
import { useShallow } from "zustand/react/shallow";
import { useState } from "react";
import {
  LocalStorageKeys,
  removeItemInLocalStorage,
  setDataInLocalStorage,
} from "../util/localStorage";
import { initialNodes } from "../nodes";
import { initialEdges } from "../edges";

const selector = (state: StoreState) => ({
  nodes: state.nodes,
  edges: state.edges,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
});

const initMessage = { type: "", text: "" };

export const Navbar = () => {
  // A global store to maintain the chatbot flow user interactions accross the app.
  const { nodes, edges, setNodes, setEdges } = useFlowStore(
    useShallow(selector)
  );

  // A local store to maintain the feedback given to user
  const [message, setMessage] = useState(initMessage);

  // A validations check on save changes
  const checkValidations = () => {
    const nodesLength = nodes.length;
    const edgesLength = edges.length;

    if (nodesLength - 1 != edgesLength || nodesLength < 1 || edgesLength < 1) {
      setMessage({
        type: "error",
        text: "Cannot save flow, please check your connection",
      });
    } else {
      setMessage({
        type: "success",
        text: "Your flow saved successfully!",
      });
      setDataInLocalStorage(LocalStorageKeys.nodesEdges, { nodes, edges });
    }
    setTimeout(() => {
      setMessage(initMessage);
    }, 4000);
  };

  // To clear the states and localStorage
  const onRestore = () => {
    setNodes(initialNodes);
    setEdges(initialEdges);
    removeItemInLocalStorage(LocalStorageKeys.nodesEdges);
  };

  return (
    <Box sx={{ backgroundColor: "grey.100" }} p={2}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={message.type ? "space-between" : "flex-end"}
        >
          {message.type && (
            <Typography
              sx={{
                backgroundColor: `${message.type}.light`,
                p: 1,
                borderRadius: 2,
                mx: "auto",
              }}
              variant="subtitle2"
            >
              {message.text}
            </Typography>
          )}

          <Stack direction="row" spacing={2}>
            <Button variant="outlined" size="large" onClick={checkValidations}>
              Save Changes
            </Button>

            <Button variant="text" onClick={onRestore}>
              Restore
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
