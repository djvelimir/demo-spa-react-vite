import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeView from "./views/HomeView.tsx";
import AboutView from "./views/AboutView.tsx";
import ContactView from "./views/ContactView.tsx";
import PageNotFoundView from "./views/PageNotFoundView.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<HomeView />} /> */}
          <Route path="home" element={<HomeView />} />
          <Route path="about" element={<AboutView />} />
          <Route path="contact" element={<ContactView />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<PageNotFoundView />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
