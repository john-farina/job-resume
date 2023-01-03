import { useState } from "react";

function CardThreeExperience() {
  let string = "`${yourCompany.name}`";
  let [popUpStyle, setPopUpStyle] = useState({
    display: "none",
  });

  return (
    <div id="card3" className="card">
      <div className="cardBack cardBack3"></div>

      <div style={popUpStyle} className="alertPopUp">
        <p className="cardText">TypeError: yourCompany.name is undefined.</p>
      </div>

      <div className="cardContents">
        <h2 className="cardTitle">Experience:</h2>

        <p className="cardText">
          -{" "}
          <span
            onMouseEnter={() => {
              setPopUpStyle({ display: "flex" });
            }}
            onMouseLeave={() => {
              setPopUpStyle({ display: "none" });
            }}
            className="companyNameText"
          >
            {string}
          </span>
        </p>

        <p className="cardText"></p>
      </div>
    </div>
  );
}
export default CardThreeExperience;
