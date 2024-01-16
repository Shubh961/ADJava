// Login.jsx
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
import { login } from "../Services/ServiceEmployee.js";

export const Login = () => {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the login function from the backend service
      const result = await login(loginFormData);

      if (result) {
        // Check the user's role and navigate accordingly
        if (result === "Owner") navigate("/dashboardagencyowner");
        else if (result === "Bank") navigate("/dashboardbank");
        else if (result === "Telecaller") navigate("/dashboardtelecaller");
        else console.log("Invalid role");
      } else {
        console.log("Login not authenticated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <h1>Login</h1>
          <Row className="justify-content-md-center">
            <Col md="12">
              <Form onSubmit={handleLoginSubmit}>
                <FloatingLabel controlId="floatingInput" label="Email address">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handleLoginChange}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleLoginChange}
                  />
                </FloatingLabel>

                <Button
                  variant="secondary"
                  size="lg"
                  type="submit"
                  className="mt-3"
                >
                  Login
                </Button>
              </Form>

              {/* Links for registration and other dashboards */}
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
