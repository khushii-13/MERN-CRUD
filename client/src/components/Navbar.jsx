import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  
  const [totalUserCount,setTotalUserCount] = useState(0);
  const  totalUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v2/count-users", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
      setTotalUserCount(data.userCount);
      }
      else{
      console.log(data.message);
      }
    } 
    catch (error) {
    console.log(error);
    }
  };
  useEffect(()=>{
  totalUsers();
  },[]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold " to="/">
            MERN CRUD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  View Users<sup className="total-users">{totalUserCount}</sup>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/create-user"
                >
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
