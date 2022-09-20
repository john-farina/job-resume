import magic8Ball from "../img/magib8ball.png";
function CardTwoProjects() {
  return (
    <div id="card2" className="card">
      <div className="cardBack cardBack2"></div>
      <div className="cardContents projectCont">
        <h2 className="cardTitle">Projects:</h2>
        <h3 className="cardSubTitle">Full Stack:</h3>
        <div className="textContainer">
          <p className="cardText">
            <a href="" className="textButton">
              FLASH!"cards"
              <img src={magic8Ball} alt="" className="websiteImage" />
            </a>{" "}
            - a website where you can post and comment on flashcards, made with
            Rails & React
          </p>
        </div>

        <h3 className="cardSubTitle">Vanilla Javascript:</h3>
        <div className="textContainer">
          <p className="cardText">
            <a
              className="textButton transition"
              href="https://js-tamagotchi.netlify.app/testdesign/tama"
            >
              <img src={magic8Ball} alt="" className="websiteImage" />
              Tamagotchi
            </a>
            - A clone of the classic Tamagotchi hand-held game, built with
            vanilla JavaScript
          </p>
        </div>

        <div className="textContainer">
          <p className="cardText">
            <a
              className="textButton transition"
              href="https://themagiceightball.netlify.app/"
            >
              Magic 8 Ball
              <img src={magic8Ball} alt="" className="websiteImage" />
            </a>
            - An online remake of the Magic 8 Ball, built with vanilla
            JavaScript
          </p>
        </div>

        <div className="textContainer">
          <p className="cardText">
            <a
              className="textButton transition"
              href="https://tictaccode.netlify.app/"
            >
              <img src={magic8Ball} alt="" className="websiteImage" />
              Tic Tac Toe
            </a>
            - 2 player Tic Tac Toe game, built with vanilla JavaScript
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardTwoProjects;
