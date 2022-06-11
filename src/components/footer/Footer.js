import React from "react";
import FileSaver from 'file-saver';
import "../../stylesheets/footer.css";



const Footer = () => {
  const pressKitDownload = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/presskit.zip",
      "presskit.zip");
  }

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
        <div className="presskit">
          <h3 className="ui header">
            <i className="home icons">
              <i className="download link icon" onClick={pressKitDownload}>
                <p className="devd">PressKit</p>
              </i>
            </i>
          </h3>
        </div>
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
