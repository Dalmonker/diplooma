import { Box, Input, Button } from "@mui/material";

const AddChapter = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Input placeholder="Название главы" />
      <Button sx={{ ml: "10px" }} variant="outlined">
        Добавить главу
      </Button>
    </Box>
  );
};

export default AddChapter;
