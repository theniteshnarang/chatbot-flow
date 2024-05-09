import { Box, TextField, Typography } from "@mui/material";

export const SettingsPanel = () => {
  return (
    <Box>
      <Box sx={{ borderBottom: "5px solid", borderColor: "grey.100", p: 1 }}>
        <Typography textAlign="center" variant="h5">
          Message
        </Typography>
      </Box>
      <Box p={1}>
        <Typography color="text.disabled" variant="h6">
          Text
        </Typography>
        <TextField fullWidth minRows={3} multiline />
      </Box>
    </Box>
  );
};
