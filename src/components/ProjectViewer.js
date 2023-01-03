import { useRef, useState } from "react";
import Pic from "../img/magib8ball.png";
import Balancer from "react-wrap-balancer";
import ArrowIcon from "../img/arrow.svg";

export default function ProjectViewer({ imgArray, description }) {
  const [clicked, setClicked] = useState(false);
  const clickClass = useRef("shown");
  const [imgPosition, setImgPosition] = useState(0);

  function popUp() {
    if (clicked) {
      clickClass.current = "shown";
    } else {
      clickClass.current = "hidden";
    }
  }

  function adjustImagePosition(direction) {
    const length = imgArray.length;

    if (direction === "left") {
      if (imgPosition === 0) {
        setImgPosition(length - 1);
      } else {
        setImgPosition(imgPosition - 1);
      }
    } else if (direction === "right") {
      if (imgPosition === length - 1) {
        setImgPosition(0);
      } else {
        setImgPosition(imgPosition + 1);
      }
    }
  }

  function getImageFromArray(index) {
    return imgArray[index];
  }

  console.log(imgArray);

  return (
    <>
      <div
        className="projectsRow"
        onClick={() => {
          popUp();
          setClicked(!clicked);
        }}
      >
        <h2>{}</h2>
      </div>

      <div className={`projectsDescription ${clickClass.current}`}>
        <div className="left">
          <div className="imageContainer">
            <div className="image">
              <img
                src={getImageFromArray(imgPosition)}
                className="fit"
                alt=""
              />
            </div>
          </div>

          <div className="nextImageBar">
            <button
              className="imageButtons"
              onClick={() => {
                adjustImagePosition("left");
              }}
            >
              <img src={ArrowIcon} alt="" srcset="" />
            </button>
            <button
              className="imageButtons"
              onClick={() => {
                adjustImagePosition("right");
              }}
            >
              <img src={ArrowIcon} className="rightArrow" alt="" srcset="" />
            </button>
            {/* <p>position:{imgPosition} </p> */}
          </div>
        </div>

        <div className="right">
          <p>
            <Balancer>{description}</Balancer>
          </p>
        </div>
      </div>
    </>
  );
}
