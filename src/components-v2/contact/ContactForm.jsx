import React from "react";
import "./Contact.css";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="contact-form">
        {/* LETTER */}
        <div className="letter cf">
          <div className="stamp">
            <img src="images/site/face-cover.png" alt="stamp" />
          </div>
          <div className="letter-info">
            <h4>Hanpeng Wang</h4>
            <p>
              <a href="#">
                <i>hanpeng.wang.career@gmail.com</i>
              </a>
              <i
                className="icon-copy"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "hanpeng.wang.career@gmail.com"
                  );
                }}
              ></i>
            </p>
            <p>Toronto/Halifax/Vancouver</p>
          </div>
        </div>
        {/* LETTER */}
        <form
          id="contact-form"
          action={() => {
            console.log("ok");
          }}
          method="post"
        >
          {/* enter your e-mail address here */}
          <input
            type="hidden"
            id="to"
            name="to"
            defaultValue="email@email.com"
          />
          <p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="required" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="required email"
            />
          </p>
          {/* <p>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="required"
            />
          </p> */}
          <p>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="required"
              defaultValue={""}
            />
          </p>
          <p>
            <img
              className="ajax-loader"
              src="images/bckg/loader_light.gif"
              alt="Sending ..."
            />
            <input type="submit" className="btn submit" defaultValue="SEND" />
          </p>
        </form>
      </div>
    );
  }
}

export default ContactForm;
