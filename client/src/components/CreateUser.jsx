import React from "react";

export const Forms = () => {
  return (
    <>
      <form className="m-auto w-50 p-3 mt-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input type="number" className="form-control" id="age" />
        </div>

        <button
          type="submit"
          className="btn btn-dark w-25 mt-5 d-block mx-auto fw-bold"
        >
          Submit
        </button>
      </form>
    </>
  );
};
