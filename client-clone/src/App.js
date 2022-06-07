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
import Rooms2 from "./pages/rooms/Rooms2";
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

//import framework, modules, other...

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to={"/loginAdmin"} />;
    } else if (!user.isAdmin) {
      return <Navigate to={"/NotAllowd"} />;
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
        <Route path="/category/AllRoom/:id" exact element={<Rooms2 />} />
        <Route path="/register" exact element={<Register />} />

        <Route path="/NotAllowd" exact element={<NotAllowed />} />

        <Route
          path="/Admin"
          exact
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        >
          <Route
            path="User"
            element={
              <ProtectedRoute>
                <UsersAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="NewUser"
            element={
              <ProtectedRoute>
                <NewUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="UpdateUser/:id"
            element={
              <ProtectedRoute>
                <UpdateUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="Category"
            element={
              <ProtectedRoute>
                <CategoriesAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="NewCategory"
            element={
              <ProtectedRoute>
                <NewCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="UpdateCategory"
            element={
              <ProtectedRoute>
                <UpdateCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="Room"
            element={
              <ProtectedRoute>
                <RoomsAdmin />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
