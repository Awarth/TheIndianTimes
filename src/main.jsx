import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Detailed from "./components/Detailed.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="/article/:articleId" element={<Detailed/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
