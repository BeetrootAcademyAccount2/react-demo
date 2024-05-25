import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AlertMessage from "./AlertMessage";

function Login() {
  const serverError = true;
  const serverMessage = "warning";

  const counterRef = useRef(0);
  const userInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const setCounter = () => {
    counterRef.current += 1;
    console.log(counterRef);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const username = event.currentTarget.elements.username.value;
    const password = event.currentTarget.elements.password.value;
  };
  const handleFocusUserClick = () => {
    userInputRef.current.focus();
  };

  const handleFocusPasswordClick = () => {
    passwordInputRef.current.focus();
  };

  return (
    <div>
      {serverError && <AlertMessage serverMessage={serverMessage} />}
      <div>
        <Button onClick={() => setCounter()}>Increase</Button>
        {counterRef.current}
      </div>
      <Button onClick={handleFocusUserClick}>Focus on User Input</Button>
      <Button onClick={handleFocusPasswordClick}>
        Focus on Password Input
      </Button>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>User</Form.Label>
            <Form.Control
              ref={userInputRef}
              type="text"
              placeholder="Username"
              name="username"
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordInputRef}
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
