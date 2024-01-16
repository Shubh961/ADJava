import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { saveEmployees } from "../Services/ServiceEmployee.js";

export function Register() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    phoneno: "",
    password: "",
    email: "",
    address: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    phoneno: "",
    password: "",
    email: "",
    address: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation for firstname
    if (!formdata.firstname.trim()) {
      newErrors.firstname = "First name is required";
      isValid = false;
    }

    // Validation for lastname
    if (!formdata.lastname.trim()) {
      newErrors.lastname = "Last name is required";
      isValid = false;
    }

    // Validation for phoneno
    if (!formdata.phoneno.trim()) {
      newErrors.phoneno = "Phone number is required";
      isValid = false;
    }

    // Validation for email
    if (!formdata.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // Validation for address
    if (!formdata.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    // Validation for password
    if (!formdata.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    // Validation for role
    if (formdata.role === "Select role") {
      newErrors.role = "Please select a role";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const result = await saveEmployees(formdata);
        console.log("Data Inserted from backend!!");
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 4000);
      } catch (error) {
        console.log("Something went wrong at connection!!");
      }
    } else {
      console.log("Form validation failed");
    }
  };
  return (
    <Container fluid className="registration-container">
      <h3 className="text-center mb-4">Registration Page</h3>
      <Row>
        <Col>
          {isSubmitted ? (
            <Alert variant="success" className="mb-4">
              Registered Successfully!
            </Alert>
          ) : null}
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md="6">
            <FloatingLabel
              controlId="floatingInputFirstname"
              label="First Name"
            >
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstname"
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md="6">
            <FloatingLabel controlId="floatingInputLastname" label="Last Name">
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastname"
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md="6">
            <FloatingLabel controlId="floatingInputPhoneno" label="Phone No">
              <Form.Control
                type="phone"
                placeholder="Enter phone no"
                name="phoneno"
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md="6">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                name="address"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md="6">
            <FloatingLabel controlId="floatingInputemail" label="Email address">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md="6">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Select
              aria-label="Default select example"
              controlId="formHorizontalRole"
              onChange={handleChange}
              name="role"
              required
            >
              <option>Select role</option>
              <option value="Bank">Bank</option>
              <option value="Owner">Owner</option>
              <option value="Telecaller">Telecaller</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="primary" size="lg" type="submit">
              Click To Register
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
