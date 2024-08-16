"use client";

import React from "react";
import Apps from "./apps";
import reportWebVitals from "./reportWebVitals";

function Page() {
  React.useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      const { createRoot } = require("react-dom/client");
      const root = createRoot(rootElement);
      root.render(
        <React.StrictMode>
          <Apps />
        </React.StrictMode>
      );
    }

    reportWebVitals();
  }, []);

  return <div id="root"></div>;
}

export default Page;
