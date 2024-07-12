import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import HubHome from "./pages/HubHome/HubHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HubHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
