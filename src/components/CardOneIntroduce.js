import { useEffect, useState } from "react";

function CardOneIntroduce() {
  // forwardType
  // 0px - 170px
  // 2.3s

  // backspaceType
  // 170px - 72px
  // 1s

  // reType
  // 72px - 85px
  // 0.1s

  let [titleClass, changeTitleClass] = useState(" ");
  let [titleContent, changeTitleContent] = useState("Hello World!");

  function loadDataOnce() {
    // console.log("foward now");
    changeTitleContent("Hello World!");
    changeTitleClass(" forwardType");

    setTimeout(() => {
      // console.log("backspace now");
      changeTitleClass(" backspaceType");

      setTimeout(() => {
        changeTitleContent("Hello!");
        changeTitleClass(" reType");
        // console.log("retype now");
      }, 1750);
    }, 3400);
  }
  useEffect(() => {
    loadDataOnce();
  }, []);

  return (
    <div id="card1" className="card">
      <div className="cardBack"></div>
      <div className="cardContents">
        <h2 id="typeText" className={"" + titleClass}>
          {titleContent}
        </h2>
        <p className="cardText">
          I am a <b className="boldText">FullStack Engineer</b>
        </p>
        <p className="cardText">
          I'm self taught, and went to school for Digital Art
        </p>
      </div>
    </div>
  );
}

// let typingText = document.querySelector("#typeText");
// typingText.classList.add("forwardType");

export default CardOneIntroduce;
