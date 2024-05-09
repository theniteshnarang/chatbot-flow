import { Box, Button, Container, Stack } from "@mui/material";

export const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: "grey.100" }} p={2}>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="end">
          <Button
            variant="outlined"
            sx={{ alignSelf: "end", width: "7rem" }}
            size="large"
          >
            Hello
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
