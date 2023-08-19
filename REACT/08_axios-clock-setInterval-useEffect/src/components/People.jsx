import React, { useEffect, useState } from "react";
import axios from "axios";

const People = () => {
  const [people, setPeople] = useState([]); //!insanlari listeye yerlestircem

  //!##### FETCH ########

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setInsanlar(data));
  //   }, []);

  //!##### AXIOS ########

  useEffect(() => {
    // console.log(axios.get("https://jsonplaceholder.typicode.com/users"));
    // axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>console.log(res))

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
            <div className="col-sm-6 col-md-4 col-lg-2 col-12" key={item.id}>
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
