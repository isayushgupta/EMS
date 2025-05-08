import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState("");
  const authdata = useContext(AuthContext);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  const handleLogin = (email, password) => {
    if (
      authdata &&
      authdata.admin.email == email &&
      authdata.admin.password == password
    ) {
      const admin = authdata.admin;

      if (admin) {
        setloggedInUserData(admin);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        setuser('admin');
      }
      console.log("This is admin");
    } else if (authdata) {
      const employee = authdata.employees.find(
        (e) => email == e.email && password == e.password
      );

      if (employee) {
        setuser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
        console.log("This is User");
      } else {
        alert("Invalid Credentials");
      }
    }
  };




  // console.log("App.jsx",loggedInUserData);
  // console.log("App.jsx1",authdata);
  

  // useEffect(() => {
  //   if (authdata) {
  //     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //     if (loggedInUser) {
  //       setuser(loggedInUser.role);
  //     }
  //   }
  // }, [authdata]);

  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (user === "admin") ? (
        <AdminDashboard handleLogOut={handleLogOut} data={loggedInUserData} />
      ) : (
        <EmployeeDashboard
          handleLogOut={handleLogOut}
          data={loggedInUserData}
        />
      )}
      

    </>


    
  );
};

export default App;
