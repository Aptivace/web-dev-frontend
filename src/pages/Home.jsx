import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [isAuth, setIsAuth] = useState(true);

  return <>{isAuth ? null : <Navigate to="/login" />}</>;
};

export default Home;
