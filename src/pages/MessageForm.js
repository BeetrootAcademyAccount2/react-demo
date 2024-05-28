import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useMemo } from "react";

function MessageForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const messageCharCount = useMemo(() => countChar(message), [message]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {};

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Send us a message</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={handleTitleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="message"
                value={message}
                onChange={handleMessageChange}
              />
              <Form.Text>{messageCharCount} characters</Form.Text>
            </Form.Group>
            <Button type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

function countChar(message) {
  for (let i = 0; i < 1000000000; i++) {}
  return message.length;
}

export default MessageForm;
