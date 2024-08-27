import React, { useState ,useEffect } from "react";
import { format, parseISO } from "date-fns";

const ViewUser = () => {
  const [userDataContainer , setUserDataContainer] = useState([]);
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
    } catch (error) {}
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const formatDate = (dateString) => {
    try {
      const parsedDate = parseISO(dateString);
      return format(parsedDate, "dd-MM-yyyy HH:mm:ss");
    } catch (error) {
      console.error("Invalid date format");
      return "Invalid Date";
    }
  };
  return (
    <>
    {userDataContainer.map((user , index)=>(
      <div key ={index} className="card m-auto w-75 p-2 mt-5">
        <div className="card-body">
          <h5 className="card-title">Name : {user.name}</h5>
          <p className="mb-1">
          Email : {user.email}
          </p>
          <p className="mb-1">
          Age : {user.age}
          </p>
          <p className="mb-1">
          Created At : {formatDate(user.createdAt)}
          </p>
        </div>
      </div>
    ))}
    </>
  );
};

export default ViewUser;
