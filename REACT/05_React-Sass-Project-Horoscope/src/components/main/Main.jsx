import React from "react";
import "./Main.scss";

const Main = ({ data }) => {
  console.log(data);
  return (
    <div className="container-main">
      {data.map((item, index) => {
        return (
          <div key={index} className="card">
            <h2>{item.title}</h2>
            <h4>{item.date}</h4>
            <img
              src={item.image}
              alt={item.title}
            />
            <p>
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
