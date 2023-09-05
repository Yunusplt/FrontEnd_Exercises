import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const CardDetail = ({ data }) => {
  const { name } = useParams();
  const myNavigate = useNavigate()
  console.log(name);
  console.log(data);
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row>
        {data
          .filter((item) => item.name === name)
          .map((item) => {
            return (
              <Col key={item.id}>
                <Card style={{ width: "18rem", padding: "5px 0" }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body className="text-center">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    <Card.Text>{item.yorum}</Card.Text>
                  </Card.Body>
                  <div className="text-center ">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => myNavigate(-1)}
                    >
                      Go Back
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => myNavigate("/")}
                    >
                      Go Home
                    </button>
                  </div>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default CardDetail;
