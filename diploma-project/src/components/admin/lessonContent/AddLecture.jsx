import { Container } from "@mui/system";
import React from "react";
import MDEditor, { selectWord } from "@uiw/react-md-editor";

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

const AddLecture = () => {
  const [value, setValue] = React.useState(mkdStr);
  return (
    <Container sx={{ pb: "50px", borderBottom: "2px solid #c2c2c2" }}>
      <div className="container">
        <h3>Auto</h3>
        <MDEditor height={500} value={value} onChange={setValue} />
      </div>
    </Container>
  );
};

export default AddLecture;
