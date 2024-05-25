import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleBlur = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "username":
        if (value.length < 3) {
          setUsernameError("Username must be at least 3 characters long");
        } else if (value.length > 12) {
          setUsernameError("Username must be no more than 12 characters long");
        } else {
          setUsernameError("");
        }
        break;
      case "password":
        if (value.length < 6) {
          setPasswordError("Password must be at least 6 characters long");
        } else {
          setPasswordError("");
        }
        break;
      case "firstName":
        if (value.length < 2) {
          setFirstNameError("First Name must be at least 2 characters long");
        } else {
          setFirstNameError("");
        }
        break;
      case "lastName":
        if (value.length < 2) {
          setLastNameError("Last Name must be at least 2 characters long");
        } else {
          setLastNameError("");
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { username, password } = event.target;
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>User</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={usernameError !== ""}
            />
            <Form.Control.Feedback type="invalid">
              {usernameError || "Please provide a username"}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={passwordError !== ""}
            />
            <Form.Control.Feedback type="invalid">
              {passwordError || "Please provide a password"}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={firstNameError !== ""}
            />
            <Form.Control.Feedback type="invalid">
              {firstNameError || "Please provide a First Name"}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={lastNameError !== ""}
            />
            <Form.Control.Feedback type="invalid">
              {lastNameError || "Please provide a Last Name"}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}

export default Register;
