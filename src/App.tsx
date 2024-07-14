import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";

import { UserProfile } from "./pages/UserProfile/UserProfile";
import { EditProfile } from "./pages/EditProfile/EditProfile";
import { HubHome } from "./pages/HubHome/HubHome";
import HomePage from "./pages/HomePage/HomePage";
import { Post } from "./pages/PostPage/Post";
import { PostFormPage } from "./pages/PostFormPage/PostFormPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { Page404 } from "./pages/Page404/Page404";

function App() {
  const userDataStorage = localStorage.getItem("user_data");
  const userCredentials =
    userDataStorage?.includes("_id") && JSON.parse(userDataStorage);
  const isUserAuthenticated = !!userCredentials;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute
                children={null}
                isAuthenticated={isUserAuthenticated}
              />
            }
          >
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/" element={<UserProfile />} />
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="/edit-profile/" element={<EditProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/add-post" element={<PostFormPage />} />
            <Route path="/edit-post/:id" element={<PostFormPage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
          {/* asdasd */}
          <Route path="/" element={<HubHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// <BrowserRouter>
//   <Navigation />
//   {user ? (
//     <button onClick={logout}>Logout</button>
//   ) : (
//     <>
//       <button onClick={() => login("user")}>Login as User</button>
//       <button onClick={() => login("process")}>
//         Login as Process Admin
//       </button>
//       <button onClick={() => login("system")}>Login as System Admin</button>
//     </>
//   )}
//   <Routes>
//     <Route index element={<Landing />} />
//     <Route path="/landing" element={<Landing />} />
//     <Route
//       element={
//         <ProtectedRoute
//           children={null}
//           isAuthenticated={!!user && user.role == "user"}
//         />
//       }
//     >
//       <Route path="home-user" element={<HomeUser />} />
//       <Route path="votar" element={<Votar />} />
//     </Route>
//     <Route
//       path="/process"
//       element={
//         <ProtectedRoute isAuthenticated={!!user && user.role == "process"}>
//           <HomeProcessAdmin />
//         </ProtectedRoute>
//       }
//     />
//     <Route
//       path="/system"
//       element={
//         <ProtectedRoute isAuthenticated={!!user && user.role == "system"}>
//           <HomeSysAdmin />
//         </ProtectedRoute>
//       }
//     />
//   </Routes>
// </BrowserRouter>
export default App;
