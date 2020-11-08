import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { email: "", message: "" },
    };
    this.msgPostAPI = "https://jsonplaceholder.typicode.com/posts";
  }

  render() {
    return (
      <div className="container-form">
        <form onSubmit={this.handleSend}>
          <input
            name="email"
            type="text"
            placeholder="Email"
            autoComplete="email"
            onChange={this.handleInput}
          />
          <textarea
            name="message"
            id="subject"
            placeholder="Message goes here"
            onChange={this.handleInput}
          />
          <input type="submit" value="SEND"></input>
          <i class="fa fa-refresh fa-spin"></i>
        </form>
      </div>
    );
  }

  handleSend = (e) => {
    (async () => {
      const rawResponse = await fetch(this.msgPostAPI, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      });
      const content = await rawResponse.json();
    })();
    e.preventDefault();
  };
  handleInput = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    this.setState({
      form: { ...this.state.form, [targetName]: targetValue },
    });
  };
}

export default Contact;
