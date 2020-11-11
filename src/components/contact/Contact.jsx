import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { email: "", content: "" },
      displayInvalidEmail: false,
      displayInvalidContent: false,
      sendingStatus: "",
    };
    this.msgPostAPI =
      "	https://d90832a0.us-south.apigw.appdomain.cloud/send-email-api";
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
          <>
            <label
              className="invalid-email"
              style={{
                display: this.state.displayInvalidEmail ? "inline" : "none",
              }}
            >
              would appreacite your real email address 😂
            </label>
            <br />
            <label
              className="invalid-content"
              style={{
                display: this.state.displayInvalidContent ? "inline" : "none",
              }}
            >
              send me something 👍
            </label>
          </>
          <textarea
            name="content"
            id="subject"
            placeholder="Message goes here"
            onChange={this.handleInput}
          />
          <input type="submit" value="SEND"></input>
          <i class="fa fa-refresh fa-spin"></i>
          <p>{this.state.sendingStatus}</p>
        </form>
      </div>
    );
  }

  handleSend = (e) => {
    e.preventDefault();
    this.setState({
      displayInvalidEmail: !this.validateEmail(this.state.form.email),
      displayInvalidContent: !this.state.form.content.length,
    });
    if (
      !this.validateEmail(this.state.form.email) ||
      this.state.form.content.length === 0
    ) {
      return 0;
    }

    this.setState({
      sendingStatus: "Wait a second, I'm receiving it!",
    });

    (async () => {
      const rawResponse = await fetch(this.msgPostAPI, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      });
      const res = await rawResponse.json();
      switch (res.message) {
        case "success":
          this.setState({
            sendingStatus:
              "Gotcha, I'll touch base with you soon. Have a great day!",
          });
          break;

        default:
          this.setState({
            sendingStatus:
              "Opps, something got wrong. Reach me from any social media on the left or wanghanpeng@gmail.com",
          });
          break;
      }
    })();
  };

  handleInput = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    this.setState({
      form: { ...this.state.form, [targetName]: targetValue },
    });
  };

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

export default Contact;
