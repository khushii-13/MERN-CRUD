import React, { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

const ViewUser = () => {
  const [userDataContainer, setUserDataContainer] = useState([]);
  const getAllUsers = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/get-all-users",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      if (response.ok) {
        const userData = await response.json();
        setUserDataContainer(userData.data);
        console.log(userData);
      } else {
        console.error("Failed to load user");
      }
    } catch (error) {console.log(error);}
  };
  const formatDate = (dateString) => {
    try {
      const parsedDate = parseISO(dateString);
      return format(parsedDate, "dd-MM-yyyy HH:mm:ss");
    } catch (error) {
      console.error("Invalid date format");
      return "Invalid Date";
    }
  };
  const deleteUser = async (e) => {
    try {
      if (window.confirm("Are you sure?")) {
        const user_id = e.target.getAttribute("user-id");
        const response = await fetch(
          `http://localhost:4000/api/v1/delete-particular-user?id=${user_id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          alert("User deleted sucessfully");
        } else {
          console.log(response.message);
        }
      } 
      else {
        alert("User deletion cancelled");
      }
    } 
    catch (error) {
      console.log(error);
    }
    getAllUsers();
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {userDataContainer.map((user, index) => (
        <div key={index} className="card m-auto w-75 p-2 mt-5">
          <div className="card-body">
            <h5 className="card-title">Name : {user.name}</h5>
            <p className="mb-1">Email : {user.email}</p>
            <p className="mb-1">Age : {user.age}</p>
            <p className="mb-1">Created At : {formatDate(user.createdAt)}</p>
            <div className="d-flex m-2">
              <Link to={`/create-user/${user._id}`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <button
                className="btn btn-danger ms-4"
                user-id={user._id}
                onClick={deleteUser}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewUser;
