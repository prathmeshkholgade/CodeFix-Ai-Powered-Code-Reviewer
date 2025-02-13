import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CodeContext, { CodeProvider } from "./context/codeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CodeProvider>
      {" "}
      <App />{" "}
    </CodeProvider>
  </StrictMode>
);
