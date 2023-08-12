import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//! react alaninda map ve ternary kullanilir. digerleri kullanil

const CourseCard = ({ data }) => {
  // console.log(props.data[0].name);
  console.log(data);                             // => [{…}, {…}, {…}]

  return (
    <Container>
      <Row>
        {data.map((item, index) => {
          return (
            <Col key={index} className="text-center">
              <Card style={{ width: "18rem", padding:"5px 0" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.text}
                  </Card.Text>
                  <Button variant="primary">Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
