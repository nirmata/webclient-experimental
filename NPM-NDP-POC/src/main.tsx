import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserSettingsSection from "./components/profile/profile.tsx";
import Header from "./components/header/header.tsx";
import { RecoilRoot } from "recoil";
import ThemeProvider from "./components/componentsV2/theme-provider/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider mode="light" variables={undefined}>
        <BrowserRouter basename="/npm">
          <Header />
          <Routes>
            <Route path="/profile" element={<UserSettingsSection />} />
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
