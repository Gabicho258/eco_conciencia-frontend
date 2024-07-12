import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";

import { HubHome } from "./pages/HubHome/HubHome";
import { Post } from "./pages/PostPage/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HubHome />} />

          <Route path="/login" element={<Login />} />
          <Route path="/post/" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
