import React, { useState } from "react";

export const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]: e.target.value,});
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/v1/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("User registered:", data);
      } else {
        console.error("Failed to register user");
      }
      setFormData({
        name: "",
        email: "",
        age: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>  
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
          Submit
        </button>
      </form>
    </>
  );
};

