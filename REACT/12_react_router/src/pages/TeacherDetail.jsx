import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const TeacherDetail = () => {
  const myNavigate = useNavigate();
  const { id } = useParams();
  const [kisi, setKisi] = useState({});
  console.log(id);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((datam) => setKisi(datam))
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line

  console.log(kisi);

  return (
    <Container className="d-flex justify-content-center align-item-center">
      <div>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
          alt={kisi.username}
          width="200px"
        />
        <table>
          <tr>
            <td>Name:</td>
            <td>{kisi.name}</td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>{kisi.username}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{kisi.phone}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{kisi.email}</td>
          </tr>
        </table>
        <div className="text-center pe-5 m-2">
          <button
            className="btn btn-warning me-2"
            onClick={() => myNavigate(-1)}
          >
            Go Back
          </button>
          <button className="btn btn-primary" onClick={() => myNavigate("/")}>
            Go Home{" "}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default TeacherDetail;
