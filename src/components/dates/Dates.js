import React from "react";
import "../../stylesheets/dates.css";

const Dates = () => {
  return (
    <div>
      <div className="title_actus">
        <h2>Actualités</h2>
      </div>
      <div className="dates">
        <div className="list_dates">
          <h3>
            Ms Nickki revient en Europe, accompagnée de la Memphis Soul
            Connection,en juin 2022.
          </h3>
          <br />
          <div className="ui huge relaxed divided list">
            <div className="item">
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <a
                  className="header"
                  href="https://www.facebook.com/groups/586373505926304"
                >
                  Festival Tecou en Blues
                </a>
                <div className="description">
                  Samedi 4 juin 2022 - Salle MultiCulturelle de Técou(Tarn)
                </div>
              </div>
            </div>
          </div>
          <div className="ui huge relaxed divided list">
            <div className="item">
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <a
                  className="header"
                  href="http://www.blues-rules.com/le-blues-rules-crissier-festival/blues-rules-crissier-festival-2022/"
                >
                  Chez Dan
                </a>
                <div className="description">
                  Dimanche 6 juin 2022 - Contis Plage(Landes)
                </div>
              </div>
            </div>
          </div>
          <div className="ui huge relaxed divided list">
            <div className="item">
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <a
                  className="header"
                  href="http://www.blues-rules.com/le-blues-rules-crissier-festival/blues-rules-crissier-festival-2022/"
                >
                  Blues Rules Crissier Festival
                </a>
                <div className="description">
                  Vendredi 10 et Samedi 11 juin 2022 - Parc de Montassé,
                  Crissier-Lausanne(Suisse)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dates;
