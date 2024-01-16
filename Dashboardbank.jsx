import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function Dashboardbank() {
  return (
    <div>
      <h2>This is the bank dashboard get in touch with us</h2>

      <Container fluid>
        <Row>
          <Col md={2}>
            <Navbar
              expand="lg"
              className="bg-body-dark"
              bg="dark"
              variant="dark"
            >
              <Container>
                <Navbar.Brand href="#home">Main Dashboard</Navbar.Brand>
              </Container>
            </Navbar>
            <br />

            <Navbar className="bg-body-dark" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Track status of work</Navbar.Brand>
              </Container>
            </Navbar>
            <br />

            {/*<Navbar className="bg-body-dark" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Update Profile</Navbar.Brand>
              </Container>
            </Navbar>
            */}

            <Navbar className="bg-body-dark" bg="dark" variant="dark">
              <Container>
                {/* Link to the Customer page */}
                <Navbar.Brand as={Link} to="/pages/Customer">
  Add Customer Details
</Navbar.Brand>
              </Container>
            </Navbar>
            <br />

            <Navbar className="bg-body-dark" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="./login">Logout</Navbar.Brand>
              </Container>
            </Navbar>
            <br />
          </Col>
          <Col md={10}>
            {/* Content */}
            <div className="p-4">
              <h2>Hey, Banks Connect with us</h2>
              <p>Update the profile</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
