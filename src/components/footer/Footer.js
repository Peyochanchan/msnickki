import React from "react";
import "./footer.css";

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
            <i className="icons">
              <i className="blue facebook link icon" onClick={clickOnFb}>
            <p>Follow us</p>
          </i>
        </i>
      </h3>
    </div>
    <div>
      <p className="devd">site devd by <strong>&#960;r</strong> for</p>
      </div>
      <div>
      <p className="footer-bname">Ms Nickki & the MSC</p>
      </div>
          <div className="cadre_lien">

      <h3 className="ui header_yt">
              <i className="icons">
                <i className="red youtube link icon" onClick={clickOnYt}>
                  <p>More on Youtube</p>
                </i>
              </i>
            </h3>
                </div>

    </div>
    )
}

export default Footer;
