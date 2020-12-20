import React from "react";
import ContentContainer from "../content-container/ContentContainer";
import Typist from "react-typist";

import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeInputs: [],
    };
    this.codeInputRef = React.createRef();
  }

  // handle what to do when input box is executed
  handleCodeEnter = (e) => {
    let codeValue = e.target.value;

    if (e.key === "Enter") {
      this.codeInputRef.current.placeholder = "";
      this.setState({
        codeInputs: [...this.state.codeInputs, codeValue],
      });
      e.target.value = "";
      switch (codeValue) {
        case "Hanpeng_Dev.get_contact()":
          window.location.assign(
            `${window.location.protocol}//${window.location.host}/#findme`
          );
          break;
        case "Hanpeng_Dev.show_me_your_code()":
          window.location.assign(
            `${window.location.protocol}//${window.location.host}/projects`
          );
          break;
        default:
          this.codeInputRef.current.placeholder =
            'try "Hanpeng_Dev.show_me_your_code()"';
          break;
      }
    }
  };

  handleTypingDone = () => {
    let inputEle = this.codeInputRef.current;
    this.inputTyping(inputEle);
  };

  // init input in input box
  inputTyping = (ele) => {
    let index = 0;
    let defaultCode = "Hanpeng_Dev.get_contact()";

    (function typeWriter() {
      if (index < defaultCode.length) {
        ele.defaultValue += defaultCode.charAt(index);
        index++;
        let speed = Math.random() * 150;
        setTimeout(typeWriter, speed);
      }
    })();
  };

  render() {
    return (
      <div className="section">
        <ContentContainer style={{ paddingTop: "2vh" }}>
          <Typist
            cursor={{
              show: false,
            }}
            startDelay={
              sessionStorage.getItem("showLoadingScreen") === "false" ? 0 : 2000
            }
            avgTypingDelay={0}
            stdTypingDelay={0}
            onCharacterTyped={(char) => {}}
            onTypingDone={this.handleTypingDone}
          >
            <div className="python-code">
              <p>
                <span className="python-class">Class </span>
                <span>
                  Hanpeng_Dev(
                  <span className="python-inheritObject">object</span>
                  ):
                </span>
              </p>
              <p>
                <span className="python-def">def </span>
                <span>
                  __init__(<span className="python-argSelf">self</span>):
                </span>
              </p>
              <p>
                <span className="python-self">self</span>
                <span>.last_name = </span>
                <span className="python-var-value">"Wang"</span>
              </p>
              <p>
                <span className="python-self">self</span>
                <span>.first_name = </span>
                <span className="python-var-value">"Hanpeng"</span>
              </p>
              <p>
                <span className="python-self">self</span>
                <span>.中文名 = </span>
                <span className="python-var-value">"王瀚鹏"</span>
              </p>
              <p>
                <span className="python-self">self</span>
                <span>.yoe = </span>
                <span className="python-var-value">"3 years"</span>
              </p>
              <p>
                <span className="python-self">self</span>
                <span>.fav_lang = </span>
                <span className="python-var-value">"Python"</span>
              </p>

              <p>
                <span className="python-self">self</span>
                <span>.cur_res = </span>
                <span className="python-var-value">"Canada, NS"</span>
              </p>
              <p>
                <span className="python-self">self</span>
                <span>.reloc_pref = </span>
                <span className="python-var-value">"Anywhere"</span>
              </p>

              <p className="python-staticmethod">@staticmethod</p>
              <p>
                <span className="python-def">def </span>
                <span>get_contact():</span>
              </p>
              <p className="python-pass">pass</p>
              <p className="python-staticmethod">@staticmethod</p>
              <p>
                <span className="python-def">def </span>
                <span>show_me_your_code():</span>
              </p>
              <p className="python-pass">pass</p>
            </div>
          </Typist>
          <>
            {/* add input code */}
            {this.state.codeInputs.map((element, i) => {
              return (
                <p className="python-input-code" key={i}>
                  {element}
                </p>
              );
            })}
            <br />
          </>

          <input
            type="text"
            ref={this.codeInputRef}
            onKeyDown={this.handleCodeEnter}
          />
        </ContentContainer>
      </div>
    );
  }
}

// const myIntro = `class Hanpeng_Dev(object):

// def __init__(self):
//     self.last_name = "Wang"
//     self.first_name = "Hanpeng"
//     self.中文名 = "王瀚鹏"
//     self.yoe = "3 years"
//     self.fav_lang = "Python"
//     self.cur_res = "Canada, NS"
//     self.relocation_pref = "Anywhere in the World"

// @staticmethod
// def get_contact():
//     pass

// @staticmethod
// def show_me_your_code():
//     pass

// `;

export default Home;
