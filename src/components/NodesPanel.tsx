import { Box } from "@mui/material";
import { MessageNode } from "../nodes/MessageNode";

export const NodesPanel = () => {
  return (
    <Box p={1}>
      <MessageNode
        zIndex={0}
        data={{
          label: undefined,
        }}
        id={""}
        type={""}
        selected={false}
        isConnectable={false}
        xPos={0}
        yPos={0}
        dragging={false}
      />
    </Box>
  );
};
