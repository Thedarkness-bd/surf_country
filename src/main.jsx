import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClinet = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClinet}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
