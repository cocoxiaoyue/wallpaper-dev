import React from "react";
import "./index.less";

import { UnlockOutlined } from "@ant-design/icons";

class Footer extends React.Component {
  state = {
    test: 1111,
    showFoot: false,
    lockFoot: false,
  };
  componentDidMount() {}
  topContnteOver = () => {
    if (!this.state.lockFoot) {
      this.setState({
        showFoot: true,
      });
    }
  };
  topContnteLeave = () => {
    if (!this.state.lockFoot) {
      this.setState({
        showFoot: false,
      });
    }
  };
  lockOnClick = () => {
    this.setState({
      lockFoot: !this.state.lockFoot,
    });
  };
  render() {
    return (
      <div
        onMouseLeave={() => this.topContnteLeave()}
        className={
          this.state.showFoot
            ? "Footer-content footer-show"
            : "Footer-content footer-hidden"
        }
      >
        <div className="footer-lock" onMouseOver={() => this.topContnteOver()}>
          <div className="lock" onClick={() => this.lockOnClick()}>
            <UnlockOutlined style={{ color: "#fff" }} />
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default Footer;
