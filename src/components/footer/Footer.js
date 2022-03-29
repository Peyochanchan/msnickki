import React from "react";
import "../../stylesheets/footer.css";

const Footer = () => {
  const clickOnFb = () => {
    window.open("https://www.facebook.com/msnickki");
  };

  const clickOnYt = () => {
    window.open("https://www.youtube.com/results?search_query=ms+nickki+");
  };
  return(
    <div className="footer">
    <div className="cadre_lien">
      <h3 className="ui header">
        <i className="large icons">
          <i className="blue facebook link icon" onClick={clickOnFb}></i>
        </i>
      </h3>
    </div>
    <div>
      <p className="devd">MSNickki & The MSC</p>
      </div>
      <div className="cadre_lien">
        <h3 className="ui header_yt">
          <i className="large icons">
            <i className="red youtube link icon" onClick={clickOnYt}></i>
          </i>
        </h3>
      </div>
    </div>
  )
}

export default Footer;
