import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
import Register from "./pages/auth/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Rooms from "./pages/rooms/Rooms";
import CategoriesR from "./pages/rooms/CategoriesR";
import Details from "./pages/details/Details";
import DashBoard from "./pages/admin/doashBoard/DashBoard";
import { AuthContext } from "./contexts/AuthContext";
import UsersAdmin from "./pages/admin/users/UsersAdmin";
import CategoriesAdmin from "./pages/admin/categories/CategoriesAdmin";
import RoomsAdmin from "./pages/admin/rooms/RoomsAdmin";
import React, { useContext } from "react";
import LoginAdmin from "./pages/admin/auth/LoginAdmin";
import NotAllowed from "./pages/notAllowed/NotAllowed";
import NewUser from "./pages/admin/newUser/NewUser";
import UpdateUser from "./pages/admin/updateUser/UpdateUser";
import NewCategory from "./components/admin/newCategory/NewCategory";
import UpdateCategory from "./pages/admin/updateCate/UpdateCategory";
import NewRoom from "./pages/admin/newRoom/NewRoom";
import UpdateRoom from "./pages/admin/updateRoom/UpdateRoom";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import Post2 from "./pages/post/Post2";
import MyPost from "./pages/post/MyPost";
import UpdatePost from "./pages/post/UpdatePost";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

//import framework, modules, other...

function App() {
  const ProtectedRouteAdmin = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to={"/loginAdmin"} />;
    } else if (!user.isAdmin) {
      return <Navigate to={"/NotAllowd"} />;
    }

    return children;
  };

  const ProtectedRouteHome = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/rooms" exact element={<Rooms />} />
        <Route path="/detailRoom/:id" exact element={<Details />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/loginAdmin" exact element={<LoginAdmin />} />
        <Route path="/categories/:id" exact element={<CategoriesR />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/contacts" exact element={<Contact />} />
        <Route path="/*" exact element={<PageNotFound />} />

        <Route
          path="/profiles/:id"
          exact
          element={
            <ProtectedRouteHome>
              <Profile />
            </ProtectedRouteHome>
          }
        />

        <Route
          path="/Createpost/:id"
          exact
          element={
            <ProtectedRouteHome>
              <Post2 />
            </ProtectedRouteHome>
          }
        />
        <Route
          path="/MyPost/:id"
          exact
          element={
            <ProtectedRouteHome>
              <MyPost />
            </ProtectedRouteHome>
          }
        />
        <Route
          path="/UpdatePost/:id"
          exact
          element={
            <ProtectedRouteHome>
              <UpdatePost />
            </ProtectedRouteHome>
          }
        />

        <Route path="/NotAllowd" exact element={<NotAllowed />} />

        <Route
          path="/Admin"
          exact
          element={
            <ProtectedRouteAdmin>
              <DashBoard />
            </ProtectedRouteAdmin>
          }
        >
          <Route
            path="User"
            element={
              <ProtectedRouteAdmin>
                <UsersAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="NewUser"
            element={
              <ProtectedRouteAdmin>
                <NewUser />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="UpdateUser/:id"
            element={
              <ProtectedRouteAdmin>
                <UpdateUser />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="Category"
            element={
              <ProtectedRouteAdmin>
                <CategoriesAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="NewCategory"
            element={
              <ProtectedRouteAdmin>
                <NewCategory />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="UpdateCategory/:id"
            element={
              <ProtectedRouteAdmin>
                <UpdateCategory />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="Room"
            element={
              <ProtectedRouteAdmin>
                <RoomsAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="NewRoom"
            element={
              <ProtectedRouteAdmin>
                <NewRoom />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="UpdateRoom/:id"
            element={
              <ProtectedRouteAdmin>
                <UpdateRoom />
              </ProtectedRouteAdmin>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
