import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import SettingsProvider from "contexts/SettingsContext";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import AdapterDateFns from "@mui/x-date-pickers/AdapterDateFns/AdapterDateFns";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </Provider>
  </React.StrictMode>
);
