import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { rootRouter } from "./router/route.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Provider store={store}>
    <ToastContainer/>
    <RouterProvider router={rootRouter} />
  </Provider>,
  </StrictMode>
);
