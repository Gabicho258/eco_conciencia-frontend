import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./_index.scss";
import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
