import "reactflow/dist/style.css";

import {
  Navbar,
  NodesPanel,
  ReactFlowLayout,
  SettingsPanel,
} from "./components";
import { Box, Stack } from "@mui/material";
import { useFlowStore } from "./data";

export default function App() {
  // A global store to maintain the chatbot flow user interactions accross the app.
  const nodes = useFlowStore((state) => state.nodes);

  const selectedNode = nodes.find((node) => node.selected);

  return (
    <>
      <Navbar />
      <Stack direction="row" height="90vh">
        <ReactFlowLayout />
        <Box
          width="25vw"
          borderLeft="5px solid"
          sx={{ borderColor: "grey.100" }}
        >
          {/* To interchange the components based on node selection */}
          {selectedNode ? (
            <SettingsPanel
              data={{ id: selectedNode.id, message: selectedNode.data.message }}
            />
          ) : (
            <NodesPanel />
          )}
        </Box>
      </Stack>
    </>
  );
}
