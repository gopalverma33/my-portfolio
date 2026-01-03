import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // <-- use .jsx here

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
