import React, { useContext, useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import axios from "axios";
import CodeContext from "../context/codeContext";

export default function Left() {
  const [code, setCode] = useState(`function sum (a,b){
            return a+b }`);
  const { setData } = useContext(CodeContext);

  useEffect(() => {
    prism.highlightAll();
  }, []);
  const reviewCode = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/ai/get-review`,
      {
        code,
      }
    );
    setData(response.data);
    console.log(response.data);
  };
  return (
    <div className="left">
      <div className="code">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) =>
            prism.highlight(code, prism.languages.javascript, "javascript")
          }
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            border: "1px solid #ddd",
            borderRadius: "5px",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <div className="review" onClick={reviewCode}>
        Review
      </div>
    </div>
  );
}
