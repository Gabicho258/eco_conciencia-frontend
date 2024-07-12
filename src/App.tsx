import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";

import { HubHome } from "./pages/HubHome/HubHome";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HubHome />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
