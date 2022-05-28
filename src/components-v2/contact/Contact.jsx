import React from "react";
import Peng from "../peng/Peng";
import ContactForm from "./ContactForm";

class Contact extends React.Component {
  render() {
    return (
      <div className="rm-right">
        <div className="rm-front">
          {/* BACK COVER IMAGE */}
          <div className="cover">
            <div className="cover-image-holder-back">
              <div>
                <Peng />
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT PAGE */}
        <div id="contact" className="rm-back page">
          <div className="antiscroll-wrap">
            <div className="antiscroll-inner">
              <div className="content">
                <h2>
                  <span>CONTACT</span>
                </h2>
                <h3>Where am I in this world?</h3>
                <div class="map">
                  <iframe src="https://maps.google.com/maps?source=s_q&amp;f=q&amp;hl=en&amp;geocode=&amp;;aq=&amp;sll=43.6475668,-79.3813019&amp;sspn=0.878053,0.453979&amp;ie=UTF8&amp;hq=&amp;t=p&amp;ll=43.6475668,-79.3813019&amp;spn=1.647611,1.367188&amp;z=8&amp;output=embed"></iframe>
                </div>
                <p className="center">
                  Please feel free to contact me about anything.
                </p>
                <h3>
                  <span>LET'S SOCIALIZE</span>
                </h3>
                <ul className="social">
                  <li>
                    <a href="">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-github"></i>
                    </a>
                  </li>
                </ul>
                <h3>
                  <span>DROP ME A LINE!</span>
                </h3>

                <ContactForm />
              </div>
              {/* CONTENT */}
            </div>
            {/* .antiscroll-inner */}
          </div>
          {/* .antiscroll-wrap */}
          {/* close link */}
          <a className="rm-close">
            <span />
          </a>
          {/* close link */}
        </div>
        {/* /rm-back */}
        {/* CONTACT PAGE */}
      </div>
    );
  }
}

export default Contact;
