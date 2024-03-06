import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      {/* {user && <Route path="/" exact element={<HomePage />} />} */}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
      {/* <Route path="/" exact element={<Navigate replace to="/login" />} /> */}
    </Routes>
  );
}

export default App;
