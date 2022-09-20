import { useState } from "react";

function Icon({ image, classes, alt, iconBool, iconClass, placeholder }) {
  const [popUpStyle, setPopUpStyle] = useState({ display: "none" });
  const [popUpClass, setPopUpClass] = useState(" ");

  function onMouseEnter() {
    setPopUpStyle({ display: "flex" });
    setPopUpClass(" popUpAnimate");
  }
  function onMouseExit() {
    setPopUpClass(" popDownAnimate");
    // setPopUpStyle({ display: "none" });
    setTimeout(() => {
      setPopUpStyle({ display: "none" });
    }, 190);
  }
  function onMouseDown() {
    setPopUpStyle({ display: "flex", marginTop: "10px" });
  }

  if (iconBool === true) {
    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseExit}
        className="icon"
      >
        <div style={popUpStyle} className={"popUpMenu" + popUpClass}>
          <div className="popUpTri"></div>
          <h4 className="popUpText">{placeholder}</h4>
        </div>
        <i className={"all-icons " + iconClass}></i>
      </div>
    );
  } else {
    return (
      <div
        className="icon"
        onMouseLeave={onMouseExit}
        onMouseEnter={onMouseEnter}
      >
        <div style={popUpStyle} className={"popUpMenu" + popUpClass}>
          <div className="popUpTri"></div>
          <h4 className="popUpText">{placeholder}</h4>
        </div>
        <img src={image} alt={alt} className={"all-icons " + classes} />
      </div>
    );
  }
}

Icon.defaultProps = {
  image: " ",
  classes: " ",
  alt: " ",
  iconBool: false,
  iconClass: " ",
};

export default Icon;
