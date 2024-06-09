import Markdown from "react-markdown";
import { Typography, styled } from "@mui/material";
import { Block } from "../UI";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  margin: 0 !important;

  span {
    font-size: 20px;
  }
`;

const Lecture = ({ text }) => {
  return (
    <Block>
      <Markdown
        components={{
          h2(f) {
            return <Typography>{f.children}</Typography>;
          },
          code: ({ children }) => (
            <StyledSyntaxHighlighter language="html" style={{ ...codeStyle }}>
              {children}
            </StyledSyntaxHighlighter>
          ),
          p: (f) => {
            return (
              <Typography sx={{ marginBottom: "16px", fontSize: "18px" }}>
                {f.children}
              </Typography>
            );
          },
        }}
      >
        {text}
      </Markdown>
    </Block>
  );
};

export default Lecture;
