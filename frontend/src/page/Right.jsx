import React, { useContext, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import MarkDown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import prims from "prismjs";
import CodeContext from "../context/codeContext";

export default function Right() {
  const { data } = useContext(CodeContext);

  return (
    data && (
      <div className="right">
        <MarkDown rehypePlugins={[rehypeHighlight]}>{data}</MarkDown>
      </div>
    )
  );
}
