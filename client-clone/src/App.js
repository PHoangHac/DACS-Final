import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./pages/rooms/Rooms";
import Rooms2 from "./pages/rooms/Rooms2";
import Details from "./pages/details/Details";
import DashBoard from "./pages/admin/DashBoard";
//import framework, modules, other...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/rooms" exact element={<Rooms />} />
        <Route path="/detailRoom/:id" exact element={<Details />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/category/AllRoom/:id" exact element={<Rooms2 />} />
        <Route path="/register" exact element={<Register />} />

        <Route path="/Admin" exact element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
