import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GauravImage from "../images/Gaurav.jpeg";
import PujaImage from "../images/Puja.jpg";
import ShubhamImage from "../images/Shubham.jpeg";
import UrmilaImage from "../images/Urmila.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Shubham Khade",
    rollNo: "230940520082",
    image: ShubhamImage,
  },
  {
    id: 2,
    name: "Ms. Urmila Nagdive",
    rollNo: "230940520091",
    image: UrmilaImage,
  },
  { id: 3, name: "Mrs. Puja Nikam", rollNo: "230940520060", image: PujaImage },
  {
    id: 4,
    name: "Mr. Gaurav Nikalje",
    rollNo: "230940520020",
    image: GauravImage,
  },
];
export function About() {
  return (
    <div>
      <Container fluid="md">
        <h1>Team</h1>
        <Row>
          {teamMembers.map((member) => (
            <Col lg="3" key={member.id} className="mt-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={member.image}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>
                    <h3 className="A3text">Co-Founder</h3>
                    <h5 className="A3text">{member.name}</h5>
                  </Card.Title>
                  <Card.Text className="A3text">
                    Currently pursuing PG Diploma in Advanced Computing from
                    CDAC Mumbai. <br /> Roll No. - {member.rollNo}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
