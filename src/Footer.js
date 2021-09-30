import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Made with ❤️ by <a href ="https://github.com/Alwinseb01">@alwinseb</a>
          </p>
        </div>
        <div className="row">
          <p className="col-sm">
            (Please note: You can make only 10 requests per day :))
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
