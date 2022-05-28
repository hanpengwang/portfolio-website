import React from "react";

class Resume extends React.Component {
  render() {
    return (
        <div id="resume" className="rm-back page">
        {/* .antiscroll-wrap */}
        <div className="antiscroll-wrap">
          {/* .antiscroll-inner */}
          <div className="antiscroll-inner">
            {/* CONTENT */}
            <div className="content">
              <h2><span>RESUME</span></h2>
              <h4 className="about-text">I am a Software Engineer, specialfsafasfasfasfasfasfsa
              fsafsafsa
              
              fasfsafsafsafs developed the general theory of relativity, effecting a revolution in physics.</h4>
              <h3><span>EMPLOYMENT</span></h3>
              {/* EMPLOYMENT */}
              <div className="history-group">
                <div className="history-unit">
                  <h4 className="work-time">2021 To Now</h4>
                  <div className="work-desc">
                    <h4>Software Engineer</h4>
                    <h5>Morningstar</h5>
                    <p>Worked in so many projects for best clients around the 
                       world and i get so many experiences based on my job.</p>
                  </div>
                </div>
                <div className="history-unit">
                  <h4 className="work-time">2019 - 2020</h4>
                  <div className="work-desc">
                    <h4>Other Postgraduate Exp.</h4>
                    <h5>Various</h5>
                    <p>Did some summer research with faculty and bunch of course projects related to </p>
                  </div>
                </div>
                <div className="history-unit">
                  <h4 className="work-time">2014 - 2019</h4>
                  <div className="work-desc">
                    <h4>Undergrad. Exp.</h4>
                    <p>Did research projects with facaulty</p>
                  </div>
                </div>
              </div>
              <h3><span>EDUCATION</span></h3>
              {/* EDUCATION */}
              <div className="history-group">
                <div className="history-unit">
                  <h4 className="work-time">2014 - 2019</h4>
                  <div className="work-desc">
                    <h4>Bachelor's Degree</h4>
                    <h5>Saint Mary's University @ Halifax</h5>
                    <p>Studied Finance and Maths </p>
                  </div>
                </div>
              </div>
              {/* DOWNLOAD BUTTON */}
              <div className="launch">
                <a href="images/site/cover.jpg" download='HanpengWang-resume.jpg' className="btn">DOWNLOAD CV</a>
              </div>
              {/* DOWNLOAD BUTTON */}
              <h3><span>DEVELOPMENT SKILLS</span></h3>
              {/* DEV SKILLS */}
              <div className="skill-group">
                {/* .skill-unit */}
                <div className="skill-unit">
                  <h4>HTML5</h4>
                  <div className="bar" data-percent={100}>
                    <div className="progress" />
                  </div>
                </div>
                {/* .skill-unit */}
                {/* .skill-unit */}
                <div className="skill-unit">
                  <h4>CSS3</h4>
                  <div className="bar" data-percent={50}>
                    <div className="progress" />
                  </div>
                </div>
                {/* .skill-unit */}
                {/* .skill-unit */}
                <div className="skill-unit">
                  <h4>jQuery</h4>
                  <div className="bar" data-percent={70}>
                    <div className="progress" />
                  </div>
                </div>
                {/* .skill-unit */}
                {/* .skill-unit */}
                <div className="skill-unit">
                  <h4>Wordpress</h4>
                  <div className="bar" data-percent={100}>
                    <div className="progress" />
                  </div>
                </div>
                {/* .skill-unit */}
              </div>
              {/* DEV SKILLS */}
              <h3><span>DESIGN SKILLS</span></h3>
              {/* DESIGN SKILLS */}
              <div className="skill-group">
                {/* .skill-unit */}
                <div className="skill-unit">
                  <h4>Fireworks</h4>
                  <div className="bar" data-percent={90}>
                    <div className="progress" />
                  </div>
                </div>
                {/* .skill-unit */}
                {/* .skill-unit */}
                <div className="skill-unit">
                  <h4>Photoshop</h4>
                  <div className="bar" data-percent={60}>
                    <div className="progress" />
                  </div>
                </div>
                {/* .skill-unit */}
                {/* .skill-unit */}
                <div className="skill-unit">
                  <h4>Illustrator</h4>
                  <div className="bar" data-percent={40}>
                    <div className="progress" />
                  </div>
                </div>
                {/* .skill-unit */}
              </div>
              {/* DESIGN SKILLS */}
              <h3><span>TESTIMONIALS</span></h3>
              {/* TESTIMONIALS */}
              <div className="testo-group">
                {/* Testimonial */}
                <div className="testo">
                  <img src="images/site/testo-01.jpg" alt="someone" />
                  <div className="text">
                    <h4>Albert Einstein <span>CEO / Gravity Inc.</span></h4>
                    <p>He is a great and hardworking guy. I am so proud of i have him as my asistant. He helped me so much.</p>
                  </div>
                </div>
                {/* Testimonial */}
                {/* Testimonial */}
                <div className="testo">
                  <img src="images/site/testo-02.jpg" alt="someone" />
                  <div className="text">
                    <h4>Walter White <span>Chemist / Freelancer</span></h4>
                    <p>He was a great co-worker and a friend. I would't be where i am without his support.</p>
                  </div>
                </div>
                {/* Testimonial */}
                {/* Testimonial */}
                <div className="testo">
                  <img src="images/site/testo-03.jpg" alt="someone" />
                  <div className="text">
                    <h4>Dexter Morgan <span>Lab Geek / Miami Metro</span></h4>
                    <p>He is ok.</p>
                  </div>
                </div>
                {/* Testimonial */}
              </div>
              {/* TESTIMONIALS */}
              <h3><span>SERVICES</span></h3>
              {/* SERVICES */}
              <div className="service-group">
                {/* service */}
                <div className="service">
                  <i className="icon-laptop" />
                  <h4>Web Design</h4>
                  <p>I design super cool websites. It is a long established fact that a reader will be distracted by the readable content. </p>
                </div>
                {/* service */}
                {/* service */}
                <div className="service">
                  <i className="icon-tablet" />
                  <h4>Mobile Development</h4>
                  <p>I can develop iOS and Android apps. It is a long established fact that a reader will be distracted by the readable content. </p>
                </div>
                {/* service */}
                {/* service */}
                <div className="service">
                  <i className="icon-globe" />
                  <h4>Social Media</h4>
                  <p>I am a social media expert. It is a long established fact that a reader will be distracted by the readable content. </p>
                </div>
                {/* service */}
              </div>
              {/* SERVICES */}
            </div>
            {/* CONTENT */}
          </div>
          {/* .antiscroll-inner */}
        </div>
        {/* .antiscroll-wrap */}
        <div className="rm-overlay" />
      </div>
    );
  }
}



export default Resume;
