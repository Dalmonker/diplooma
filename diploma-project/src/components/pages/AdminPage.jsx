import { Box, Container } from "@mui/system";
import Chapter from "../admin/Chapter";
import AddChapter from "../admin/AddChapter";

const AdminPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        flexDirection: "column",
      }}
    >
      <Box component="header"></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
        component="main"
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              padding: "50px",
              bgcolor: "#c2c2c2",
              boxShadow: "3px 2.5px 10px",
            }}
          >
            <Chapter />
            <AddChapter />
          </Box>
        </Container>
      </Box>
      <Box component="footer"></Box>
    </Box>
  );
};

export default AdminPage;
