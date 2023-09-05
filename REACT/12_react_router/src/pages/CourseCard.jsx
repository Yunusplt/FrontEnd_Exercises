import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

//! react alaninda map ve ternary kullanilir. digerleri kullanil

const CourseCard = ({ data }) => {
  // console.log(props.data[0].name);
  // console.log(data);                             // => [{…}, {…}, {…}]

  const myNavigate = useNavigate()
  return (
    <Container>
      <Row>
        {data.map((item, index) => {
          return (
            <Col
              key={index}
              className="text-center d-flex justify-content-center col-sm-12 col-md-6 col-lg-4"
              // sm={12}  //! es degerlerini className icerisinde yazdik. line19
              // md={6}
              // lg={4}
            >
              <Card style={{ width: "18rem", padding: "5px 0" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => myNavigate(`/courses/${item.name}`)}
                  >
                    Detail
                  </Button>
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
