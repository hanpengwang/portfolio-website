import React from "react";
import { Form, Button } from "react-bootstrap";

class Contact extends React.Component {
  styles = {
    border: "3px dashed black",
    height: "100vh",
  };

  render() {
    return (
      <div style={this.styles}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Add Your Message Here"
              style={{ height: "25vw" }}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={() => {
              alert("send msg");
            }}
          >
            SEND
          </Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
