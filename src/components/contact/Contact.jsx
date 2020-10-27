import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="container-form">
        <form
          onSubmit={(e) => {
            alert("sent msg");
            e.preventDefault();
          }}
        >
          <input type="text" placeholder="Email" />

          <textarea id="subject" placeholder="Message goes here"></textarea>
          <input type="submit" value="SEND" />
        </form>
      </div>
    );
  }
}

export default Contact;
