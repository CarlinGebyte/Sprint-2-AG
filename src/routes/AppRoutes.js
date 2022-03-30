import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "../components/Admin";
import Home from "../components/Home";
import Loading from "../components/Loading";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Questions from "../components/Questions";
import Register from "../components/Register";
import RestorePass from "../components/RestorePass";
import Statistics from "../components/Statistics";

function AppRoutes() {
  const [loading, setloading] = useState(true);

  const changeState = () => {
    setTimeout(() => {
      setloading(false);
    }, 4000);
  };

  const [loged, setLoged] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoged(user);
    }
  }, [loged]);

  if (loading) {
    changeState();
    return <Loading />;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/Sprint-2-AG/" element={<Home />} />
          <Route path="/Sprint-2-AG/login" element={<Login />}></Route>
          <Route path="/Sprint-2-AG/register" element={<Register />}></Route>
          <Route path="/Sprint-2-AG/restore" element={<RestorePass />}></Route>
          <Route path="/Sprint-2-AG/profile" element={<Profile />} />
          <Route path="/Sprint-2-AG/statistics" element={<Statistics />} />
          <Route path="/Sprint-2-AG/js" element={<Questions category="js" />} />
          <Route
            path="/Sprint-2-AG/css"
            element={<Questions category="css" />}
          />
          <Route
            path="/Sprint-2-AG/figma"
            element={<Questions category="figma" />}
          />
          <Route path="/Sprint-2-AG/ux" element={<Questions category="ux" />} />
          <Route
            path="/Sprint-2-AG/html"
            element={<Questions category="html" />}
          />
          <Route path="/Sprint-2-AG/admin" element={<Admin />} />
          <Route path="/*" element={<Navigate to="/Sprint-2-AG/" />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
