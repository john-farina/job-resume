import railsLogo from "../img/rails-icon.png";
import photoshop from "../img/photoshop.png";
import premiere from "../img/premiere.png";
import ableton from "../img/ableton.jpeg";
import sassIcon from "../img/sass.png";
import Icon from "./Icon";

function CardFourLanguages() {
  return (
    <div id="card4" className="card">
      <div className="cardBack cardBack4"></div>

      <div className="cardContents">
        <h2 className="cardTitle">Languages & Software:</h2>
        <div id="icon-container">
          <div className="icon-row">
            <Icon
              iconBool={true}
              iconClass="fa-brands fa-html5"
              placeholder="<HTML></HTML>"
            />

            <Icon
              iconBool={true}
              iconClass="fa-brands fa-css3-alt"
              placeholder="CSS:100%;"
            />

            <Icon
              iconBool={true}
              iconClass="fa-brands fa-js-square"
              placeholder="JavaScript"
            />

            <Icon
              iconBool={true}
              iconClass="fa-brands fa-react"
              placeholder=" < React />"
            />
          </div>

          <div className="icon-row">
            <Icon
              image={railsLogo}
              classes="rails"
              placeholder="<%= ruby_on_rails %>"
            />

            <Icon image={sassIcon} classes="sass" placeholder="$sass" />

            <Icon
              image={photoshop}
              classes="photoshop"
              placeholder="Photoshop"
            />

            <Icon image={premiere} classes="premiere" placeholder="Premiere" />
          </div>

          <div className="icon-row">
            <Icon image={ableton} classes="ableton" placeholder="Ableton" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFourLanguages;
