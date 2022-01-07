import React from "react";
import "./dates.css";

const Dates = () => {
  return (
    <div>
      <h2 className="title_actus">Actualités</h2>
      <div className="list_dates">
        <h3>
          Ms Nickki revient en Europe, accompagnée de la Memphis Soul
          Connection,en juin 2022, booking en cours...
        </h3>
        <br />
        <div className="ui huge relaxed divided list">
          <div class="item">
            <i class="large music middle aligned icon"></i>
            <div class="content">
              <a
                class="header"
                href="https://www.facebook.com/groups/586373505926304"
              >
                Festival Tecou en Blues
              </a>
              <div class="description">
                Samedi 4 juin 2022 - Salle MultiCulturelle de Técou(Tarn)
              </div>
            </div>
          </div>
        </div>
        <div className="ui huge relaxed divided list">
          <div class="item">
            <i class="large music middle aligned icon"></i>
            <div class="content">
              <a
                class="header"
                href="http://www.blues-rules.com/le-blues-rules-crissier-festival/blues-rules-crissier-festival-2022/"
              >
                Blues Rules Crissier Festival
              </a>
              <div class="description">
                Vendredi 10 et Samedi 11 juillet 2022 - Parc de Montassé,
                Crissier-Lausanne(Suisse)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dates;
