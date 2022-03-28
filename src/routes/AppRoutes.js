import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/restore" element={<RestorePass />}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/js" element={<Questions category="js" />} />
          <Route path="/css" element={<Questions category="css" />} />
          <Route path="/figma" element={<Questions category="figma" />} />
          <Route path="/ux" element={<Questions category="ux" />} />
          <Route path="/html" element={<Questions category="html" />} />
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
