import React from "react";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.expertise = [
      {
        name: "System Development",
        perc: 70,
      },
      {
        name: "Web Development",
        perc: 60,
      },
      {
        name: "DevOps",
        perc: 50,
      },
      {
        name: "Cloud Native Development",
        perc: 65,
      },
      {
        name: "Analytics and Practical Machine Learning",
        perc: 40,
      },
      {
        name: "Finance Domain Knowledge",
        perc: 59,
      },
    ];
    this.tools = [
      {
        name: "Python",
        perc: 80,
      },
      {
        name: "JavaScript/TypeScript",
        perc: 50,
      },
      {
        name: "C#",
        perc: 45,
      },
      {
        name: "Java",
        perc: 30,
      },
    ];
    this.interests = [
      {
        name: "Large-scale and Complex System",
        desc:
          "Working hard to make myself competent for building critical parts of the applications used by millions",
        icon: "fal fa-sitemap",
      },
      {
        name: "Interactive and smooth UI",
        desc:
          "Regardless my terrible designing skills, I love seeing and building satisfying UI and deliver good UX",
        icon: "far fa-desktop-alt",
      },
      {
        name: "BI and ML Tools",
        desc:
          "We see how data and algorithms change peoples's life and I'm always passionate about innovation",
        icon: "fal fa-chart-scatter",
      },
      {
        name: "Financial Products/ FinTech",
        desc:
          "Had chance to discover technical part of Economics and Finance during school, it'd be nice to see how industry works with them",
        icon: "fas fa-badge-dollar",
      },
    ];
  }
  render() {
    return (
      <div id="resume" className="rm-back page">
        {/* .antiscroll-wrap */}
        <div className="antiscroll-wrap">
          {/* .antiscroll-inner */}
          <div className="antiscroll-inner">
            {/* CONTENT */}
            <div className="content">
              <h2>
                <span>RESUME</span>
              </h2>
              <h4 className="about-text">
                I am a Software Engineer who loves building things that are
                useful, interesting and challenging. The best part of
                engineering is to see how the world is shifted by our product
              </h4>
              <h3>
                <span>EMPLOYMENT</span>
              </h3>
              {/* EMPLOYMENT */}
              <div className="history-group">
                <div className="history-unit">
                  <h4 className="work-time">2021 To Now</h4>
                  <div className="work-desc">
                    <h4>Software Engineer</h4>

                    <p>
                      Member of delivery squad for DBRS Morningstar technology
                      team. Squad is responsible for modern credit rating
                      delivery.
                    </p>
                  </div>
                </div>
                <div className="history-unit">
                  <h4 className="work-time">2019 - 2020</h4>
                  <div className="work-desc">
                    <h4>Other Postgraduate Exp.</h4>
                    <p>
                      Spent my first 1.5 year with IBM and Citco. Started
                      understanding enterprise software development and had some
                      good learning experiences
                    </p>
                    <p></p>
                  </div>
                </div>
                <div className="history-unit">
                  <h4 className="work-time">2014 - 2019</h4>
                  <div className="work-desc">
                    <h4>Undergrad. Exp.</h4>
                    <p>
                      Did summer research work with faculties and spent an
                      entire year in Calgary for a co-op experience. Had great
                      chances to practice school stuff
                    </p>
                  </div>
                </div>
              </div>
              <h3>
                <span>EDUCATION</span>
              </h3>
              {/* EDUCATION */}
              <div className="history-group">
                <div className="history-unit">
                  <h4 className="work-time">2019 August</h4>
                  <div className="work-desc">
                    <h4>Bachelor's Degree</h4>
                    <h5>Saint Mary's University @ Halifax</h5>
                    <p>Studied Finance and Maths</p>
                  </div>
                </div>
              </div>
              {/* DOWNLOAD BUTTON */}
              <div className="launch">
                <a
                  href='https://github.com/whpskg/files/raw/main/Hanpeng.Wang-Resume.pdf'
                  download="test.pdf"
                  className="btn"
                >
                  DOWNLOAD CV
                </a>
              </div>
              {/* DOWNLOAD BUTTON */}
              <h3>
                <span>Expertise</span>
              </h3>
              {/* DEV SKILLS */}
              <div className="skill-group">
                {/* .skill-unit */}
                {this.expertise.map((item, index) => (
                  <SkillItem key={index} name={item.name} perc={item.perc} />
                ))}
              </div>
              {/* DEV SKILLS */}
              <h3>
                <span>Tools</span>
              </h3>
              {/* DESIGN SKILLS */}
              <div className="skill-group">
                {this.tools.map((item, index) => (
                  <SkillItem key={index} name={item.name} perc={item.perc} />
                ))}
              </div>
              {/* DESIGN SKILLS */}

              {/* TESTIMONIALS */}
              <h3>
                <span>Interests</span>
              </h3>
              {/* SERVICES */}
              <div className="service-group">
                {/* service */}
                {this.interests.map((item, index) => (
                  <InterestsItem
                    key={index}
                    name={item.name}
                    desc={item.desc}
                    icon={item.icon}
                  />
                ))}
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

function SkillItem(props) {
  return (
    <div className="skill-unit">
      <h4>{props.name}</h4>
      <div className="bar" data-percent={props.perc}>
        <div className="progress" />
      </div>
    </div>
  );
}

function InterestsItem(props) {
  return (
    <div className="service">
      <i className={props.icon} />
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
    </div>
  );
}

export default Resume;
