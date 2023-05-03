import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ Comp }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let islogin = localStorage.getItem("islogin");
    if (islogin) {
      console.log(islogin);
    } else {
      navigate("/");
    }
  },[]);

  return (
    <div>
      <Comp />
    </div>
  );
};

export default ProtectedRoute;
