import { Box, Container } from "@mui/system";
import { Input, Button, Checkbox } from "@mui/material";

const AddTest = () => {
  return (
    <Container
      sx={{
        pt: "50px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center", mb: "25px" }}>
        <Input placeholder="Название теста" />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", mr: "20px" }}>
          <Input placeholder="Название теста" />
          <Checkbox />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mr: "20px" }}>
          <Input placeholder="Название теста" />
          <Checkbox />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mr: "20px" }}>
          <Input placeholder="Название теста" />
          <Checkbox />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mr: "20px" }}>
          <Input placeholder="Название теста" />
          <Checkbox />
        </Box>
      </Box>

      <Button
        sx={{
          mt: "10px",
          width: "185px",
        }}
        variant="outlined"
      >
        Добавить тест
      </Button>
    </Container>
  );
};

export default AddTest;
