import React from "react";
import { Trans, withTranslation } from 'react-i18next';
import LangSelector from './LangSelector';

// import { useLocation } from 'react-router-dom';
import "../../stylesheets/bio.css";

const Bio = () => {
  const url_affiche =
    "https://res.cloudinary.com/dnpddlkrq/image/upload/v1641565779/blues_rules_nvzdsp.jpg";

  return (
    <React.Fragment>
      <div>
      </div>
      <LangSelector />
      <div className="header-portrait">
      <div className="title">
        <h1 className="bord_haut">MS NICKKI</h1>
        <h2>&</h2>
        <h2 className="bord_bas">THE MEMPHIS SOUL CONNECTION</h2>

      </div>
      </div>
      <div className="ui two column doubling stackable grid container">
        <div className="column text-one">
          <div className="ui segment text">
      <Trans>BIOONE</Trans>
          </div>
        </div>
        <div className="tof-one">
        <div
        className="ui container grid"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <a className="tof_cadre" href={url_affiche}>
          <img
            src={url_affiche}
            alt="affichemsnickki"
            style={{ width: "100%" }}
          />
        </a>
      </div>
      </div>
        <div className="column bio text-two">
          <div className="ui segment text">
            <div className="combo">
            <Trans>BAND</Trans>
            <br/>
                      <br/>

            </div>
              <Trans>BIOTWO</Trans>
          </div>
        </div>
      </div>
      <div className="tof-two">
      <div
        className="ui container grid"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <a className="tof_cadre" href={url_affiche}>
          <img
            src={url_affiche}
            alt="festival_crissier_blues_msnickki"
            style={{ width: "100%" }}
          />
        </a>
      </div>
    </div>
    </React.Fragment>
  );
};

export default withTranslation()(Bio);
