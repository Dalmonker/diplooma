import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Aside from "../layouts/Aside";
import Footer from "../layouts/Footer";
// import { Wrapper } from "../UI";
import { Box, Container } from "@mui/material";

const MainTemplate = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      flex={"1"}
      minHeight={"100%"}
    >
      <Header />

      <Box
        display="flex"
        flex={1}
        maxWidth={1500}
        width={"100%"}
        margin={"0 auto"}
        alignItems={"start"}
        justifyContent={"start"}
      >
        <Aside />
        <Main />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainTemplate;
