import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';

import { HubHome } from './pages/HubHome/HubHome';
import HomePage from './pages/HomePage/HomePage';
import { Post } from './pages/PostPage/Post';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { EditProfile } from './pages/EditProfile/EditProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HubHome />} />
          <Route path='/home' element={<HomePage />} />

          <Route path='/login' element={<Login />} />
          <Route path='/post/' element={<Post />} />
          <Route path='/profile/' element={<UserProfile />} />
          <Route path='/edit-profile/' element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
