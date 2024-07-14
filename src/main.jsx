import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Verify from "./components/Verify.jsx";
import Upload from "./components/Upload.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "upload",
          element: <Upload />
        },
        {
          path: "verify",
          element: <Verify />
        },
      ]
    }
  ])
  
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
