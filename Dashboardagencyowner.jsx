import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";

export function Dashboardagencyowner() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
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
                <Navbar.Brand href="#home">Employee List</Navbar.Brand>
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
                <Navbar.Brand href="#home">Track Work</Navbar.Brand>
              </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-dark" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Logout</Navbar.Brand>
              </Container>
            </Navbar>
            <br />
          </Col>
          <Col md={10}>
            {/* Content */}
            <div className="p-4">
              <h2>Welcome To Dashboard</h2>

              <Button variant="primary" onClick={handleShow}>
                IDFC BANK Target
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>IDFC BANK Targert Announcement </Modal.Title>
                </Modal.Header>
                <Modal.Body>Complete Your Target till 15-Dec</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>

              <Button variant="primary" onClick={handleShow}>
                YES BANK Target
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>YES BANK Targert Announcement </Modal.Title>
                </Modal.Header>
                <Modal.Body>Complete Your Target till 31-Dec</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>

              <Button variant="primary" onClick={handleShow}>
                Maharashtra BANK Target
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Maharashtra BANK Targert Announcement{" "}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>Complete Your Target till 1-jan</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button variant="primary" onClick={handleShow}>
                HDFC BANK Target
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>HDFC BANK Targert Announcement </Modal.Title>
                </Modal.Header>
                <Modal.Body>Complete Your Target till 16-jan</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
