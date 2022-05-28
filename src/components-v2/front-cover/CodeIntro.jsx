import React from "react";
import Typist from "react-typist";

import "./CodeIntro.css";

class CodeIntro extends React.Component {
  render() {
    return (
      <div className="section">
        <Typist
          cursor={{
            show: false,
          }}
          avgTypingDelay={0}
          stdTypingDelay={0}
          onCharacterTyped={(char) => {}}
          onTypingDone={this.handleTypingDone}
        >
          <div className="python-code">
            <p>
              <span className="python-class">Class </span>
              <span>
                HanpengDev(
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
            <div>
              <p className="python-staticmethod">@staticmethod</p>
              <p>
                <span className="python-def">def start</span>
                <span>():</span>
              </p>
              <p className="python-pass">
                while awake: <br />
                <p className="python-def">eat()</p>
                <p className="python-def">code()</p>
                <p className="python-def">sleep_good()</p>
              </p>
            </div>
          </div>
        </Typist>
      </div>
    );
  }
}

export default CodeIntro;
