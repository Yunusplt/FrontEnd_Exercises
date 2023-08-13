import React from "react";
import "./Card.scss";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <div key={index} className="main-div">
            <h1 className="name">{item.name}</h1>
            <h2 className="job">{item.job}</h2>
            <p className="comment">{item.comment}</p>
            <img src={item.img} alt="person" width="100px" />
            <div className="btn-div">
              <button className="btn-div-small">small</button>
              <button className="btn-div--large">large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
