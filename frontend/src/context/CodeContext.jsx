import React, { createContext, useState } from "react";

const CodeContext = createContext();

export function CodeProvider({ children }) {
  const [data, setData] = useState("");

  return (
    <CodeContext.Provider value={{ data, setData }}>
      {" "}
      {children}{" "}
    </CodeContext.Provider>
  );
}
export default CodeContext;
