import React, { useState } from "react";

const Card = ({ item }) => {
  const [turn, setTurn] = useState(false);
  //   console.log(turn);
  //   console.log(item);
  return (
    <div className="card" onClick={() => setTurn(!turn)}>
      {turn ? (
        <>
          <div className="d-flex flex-grow-1">
            <ul>
              <li>🏀{item.statistics[0]}</li>
              <li>🏀{item.statistics[1]}</li>
              <li>🏀{item.statistics[2]}</li>
              <li>🏀{item.statistics[3]}</li>
            </ul>
          </div>
          <div className="card-footer text-muted">{item.name}</div>
        </>
      ) : (
        <>
          <div className="d-flex flex-grow-1">
            <img
              className="card-img-top object-fit-cover "
              src={item.img}
              alt="Card image cap"
            />
          </div>
          <div className="card-footer text-muted text-center">
            <h4>{item.name}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
