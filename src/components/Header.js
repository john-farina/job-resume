import { useState } from "react";
import { Document, Page } from "react-pdf";
import resume from "../img/sample.pdf";

function Header() {
  let [menuIsOpen, setMenuOpen] = useState(false);
  let [animateStyle, setAnimateStyle] = useState({
    display: "none",
    animation: "animationDown 0.5s",
  });
  let [emailAnimateStyle, setEmailAnimateStyle] = useState({
    display: "none",
    animation: "animationDown 0.5s",
  });
  let [animateResumeStyle, setResumeAnimateStyle] = useState({
    display: "none",
    animation: "animationDown 0.5s",
  });

  let [emailVisible, setEmail] = useState({ display: "flex" });
  let [gitVisible, setGit] = useState({ display: "none" });

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function openMenu() {
    if (menuIsOpen === false) {
      setMenuOpen(true);
      setAnimateStyle({
        display: "none",
        animation: "animationUp 0.3s",
      });
      setResumeAnimateStyle({
        display: "none",
        animation: "animationUpResume 0.5s",
      });

      setEmailAnimateStyle({
        display: "flex",
        animation: "animationDown 0.3s",
      });
    } else {
      setAnimateStyle({
        display: "none",
        animation: "animationUp 0.3s",
      });
      setResumeAnimateStyle({
        display: "none",
        animation: "animationUpResume 0.5s",
      });

      setEmailAnimateStyle({
        display: "flex",
        animation: "animationUp 0.3s",
      });

      setTimeout(() => {
        setMenuOpen(false);
        setEmailAnimateStyle({
          display: "none",
          animation: "animationUp 0.3s",
        });
      }, 280);
    }
  }

  function openGitMenu() {
    if (menuIsOpen === false) {
      setMenuOpen(true);
      setEmailAnimateStyle({
        display: "none",
        animation: "animationUp 0.3s",
      });
      setResumeAnimateStyle({
        display: "none",
        animation: "animationUpResume 0.5s",
      });

      setAnimateStyle({
        display: "flex",
        animation: "animationDown 0.3s",
      });
    } else {
      setAnimateStyle({
        display: "flex",
        animation: "animationUp 0.3s",
      });
      setResumeAnimateStyle({
        display: "none",
        animation: "animationUpResume 0.5s",
      });
      setEmailAnimateStyle({
        display: "none",
        animation: "animationUp 0.3s",
      });
      setTimeout(() => {
        setMenuOpen(false);

        setEmailAnimateStyle({
          display: "none",
          animation: "animationUp 0.3s",
        });

        setAnimateStyle({
          display: "none",
          animation: "animationUp 0.3s",
        });
      }, 280);
    }
  }

  function openResumeMenu() {
    if (menuIsOpen === false) {
      setMenuOpen(true);
      setEmailAnimateStyle({
        display: "none",
        animation: "animationUp 0.3s",
      });
      setAnimateStyle({
        display: "none",
        animation: "animationUp 0.3s",
      });
      setResumeAnimateStyle({
        display: "flex",
        animation: "animationDownResume 0.5s",
      });
    } else {
      setMenuOpen(false);
      setResumeAnimateStyle({
        display: "flex",
        animation: "animationUpResume 0.5s",
      });
      setEmailAnimateStyle({
        display: "none",
        animation: "animationUp 0.3s",
      });

      setAnimateStyle({
        display: "none",
        animation: "animationUp 0.3s",
      });

      setTimeout(() => {
        setMenuOpen(false);
        setResumeAnimateStyle({
          display: "none",
        });
      }, 280);
    }
  }

  return (
    <div id="header">
      <div style={emailAnimateStyle} className="linkUnderBox">
        <div style={emailVisible} className="underBoxEmail">
          <a href="mailto:johnfarina8@gmail.com">johnfarina8@gmail.com</a>
        </div>
      </div>

      <div style={animateStyle} className="linkUnderBox">
        <div className="underBoxGit">
          <a href="https://github.com/john-farina">@john-farina</a>
        </div>
      </div>

      <div style={animateResumeStyle} className="linkUnderBox underBoxResume">
        <iframe className="resumeFrame" src={resume}></iframe>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>

      <a onClick={openResumeMenu}>
        <button id="resumeButton" className="transition">
          resume
        </button>
      </a>

      <a href="/">
        <h1 id="headName">johnFarina</h1>
      </a>

      <a onClick={openGitMenu}>
        <button id="gitButton" className="transition">
          <i className="fa-brands fa-github"></i>
        </button>
      </a>

      <a onClick={openMenu}>
        <button id="emailButton" className="transition">
          <i className="fa-solid fa-envelope"></i>
        </button>
      </a>
    </div>
  );
}

export default Header;
