import { createRoot } from "react-dom/client";

import App from "./app/App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Mount container not found");
}

const root = createRoot(container);
root.render(<App />);
