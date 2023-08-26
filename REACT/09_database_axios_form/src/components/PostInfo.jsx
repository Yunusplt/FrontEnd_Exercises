import React, { useState } from "react";

const PostInfo = ({ postBilgi }) => {
  //! Süslü icerisinde...{postBilgi}
  //!label ve input area yan yanaydi. inputun className"form-control" yapinca altli üstlü oldu.
  //! formda en önemli sey. type"submit", onSubmit, e.preventDefault()
  //! reset önemli document.querySelector("form").reset()
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    postBilgi({ title: title, description: desc }); //! sanirim json formatta yazdik buraya
    document.querySelector("form").reset();
    console.log("hello");
  };

  console.log("hello");

  return (
    <div className="container text-center mt-4 bg-light">
      <h1 className="display-5 text-danger border-bottom border-danger d-inline ps-5 pe-5 ">
        Add Your Tutorial
      </h1>
      <form onSubmit={formSubmit}>
        <div className="mt-4 mb-4 ">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your description"
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostInfo;
