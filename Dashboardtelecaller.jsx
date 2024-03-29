import { Container, Row, Col } from "react-bootstrap";


import Navbar from "react-bootstrap/Navbar";
export function Dashboardtelecaller() {
  return (
    <div>
      <h2>This is telecaler bashboard</h2>

      <Container fluid>
        <Row>
          <Col md={2}>
            <Navbar
              expand="lg"
              className="bg-body-dark  "
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
                <Navbar.Brand href="#home">Update Work</Navbar.Brand>
              </Container>
            </Navbar>
            <br />

            <Navbar className="bg-body-dark" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Update Profile</Navbar.Brand>
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
              <h4>Every call is an opportunity to connect, engage, and make a positive impact. As a telecaller, your voice is a powerful instrument, shaping relationships and opening doors. Embrace each conversation with enthusiasm and empathy, for it's through these calls that opportunities unfold and connections are forged</h4>
              <p>Go on..................</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
