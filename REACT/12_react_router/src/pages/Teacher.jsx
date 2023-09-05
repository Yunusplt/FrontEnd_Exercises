import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const People = () => {
  const myNavigate = useNavigate()
  const [people, setPeople] = useState([]); //!insanlari listeye yerlestircem

//! 08_axios dosyasindan alinmistir.

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPeople(res.data));

    console.log(people);
  }, []); // eslint-disable-line

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map((item) => {
          return (
            <div 
            className="col-sm-6 col-md-4 col-lg-2 col-12 btn" 
            key={item.id}
            onClick={()=>myNavigate(`/teacher/${item.id}`)}
            >
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${item.id}.svg`}
                alt={item.name}
              />
              <h5>{item.name}</h5>
              <h6>{item.phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
