import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Forms = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const fetchUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/get-particular-user?id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const user_data = await response.json();
        setFormData(user_data.data);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = id
        ? `http://localhost:4000/api/v1/update-particular-user?id=${id}`
        : `http://localhost:4000/api/v1/`;
      const method = id ? "PUT" : "POST";
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(id ? "User updated:" : "User created:", data);
        navigate('/');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  return (
    <form className="m-auto w-75 p-3 mt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-dark w-100 mt-5 d-block mx-auto fw-bold"
      >
        {id ? "Update" : "Submit"}
      </button>
    </form>
  );
};
