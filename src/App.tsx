import "reactflow/dist/style.css";

import {
  Navbar,
  NodesPanel,
  ReactFlowLayout,
  // SettingsPanel,
} from "./components";
import { Box, Stack } from "@mui/material";

export default function App() {
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
          <NodesPanel />
          {/* <SettingsPanel /> */}
        </Box>
      </Stack>
    </>
  );
}
