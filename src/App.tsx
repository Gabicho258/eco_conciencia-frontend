import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";

import { HubHome } from "./pages/HubHome/HubHome";
import HomePage from "./pages/HomePage/HomePage";
import { Post } from "./pages/PostPage/Post";
import { PostFormPage } from "./pages/PostFormPage/PostFormPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HubHome />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/post/" element={<Post />} />
          <Route path="/add-post" element={<PostFormPage />} />
          <Route path="/edit-post/:id" element={<PostFormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
