import { Box, CircularProgress } from "@mui/material";
import Test from "../blocks/Test";
import Lecture from "../blocks/Lecture";
import Practic from "../blocks/Practic";
import { useEffect, useState } from "react";
import { request } from "../../core/utils/request";
import { useParams } from "react-router-dom";

const Main = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { lesson } = useParams();

  useEffect(() => {
    if (lesson === "") {
      lesson = "chto-takoe-css";
    }
    setLoading(true);
    request("https://diplooma-server.vercel.app/api/lessons/" + lesson)
      .then((res) => {
        setContent(res);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [lesson]);

  if (isLoading)
    return (
      <Box
        component="main"
        p={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex="1"
        minHeight={"100%"}
        margin={0}
      >
        <CircularProgress />
      </Box>
    );
  return (
    <Box className="main-media" component="main" p={2} flexGrow={1}>
      {content.map(({ type, data }) => {
        switch (type) {
          case "lecture":
            return <Lecture key={data.id} {...data} />;
          case "test":
            return <Test key={data.id} {...data} />;
          default:
            return null;
        }
      })}
    </Box>
  );
};

export default Main;
