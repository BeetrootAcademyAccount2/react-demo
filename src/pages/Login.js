import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AlertMessage from "./AlertMessage";
import axios from "axios";

function Login() {
  const serverError = true;
  const serverMessage = "warning";

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const username = event.currentTarget.elements.username.value;
    const password = event.currentTarget.elements.password.value;
    submit(username, password);
  };

  const submit = (username, password) => {
    axios
      .post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
        expiresInMins: 30,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {serverError && <AlertMessage serverMessage={serverMessage} />}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>User</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              name="username"
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
        </Row>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
