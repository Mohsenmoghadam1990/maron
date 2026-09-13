
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    const updateMusicState = (event) => {
      if (typeof event.detail === "boolean") {
        setIsMusicPlaying(event.detail);
      }
    };

    window.addEventListener(
      "raikaMusicStateChange",
      updateMusicState
    );

    if (window.getRaikaMusicState) {
      setIsMusicPlaying(window.getRaikaMusicState());
    }

    return () => {
      window.removeEventListener(
        "raikaMusicStateChange",
        updateMusicState
      );
    };
  }, []);

  const handleMusicClick = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (window.toggleRaikaMusic) {
      await window.toggleRaikaMusic();

      if (window.getRaikaMusicState) {
        setIsMusicPlaying(window.getRaikaMusicState());
      }
    }
  };

  return (
    <nav className="navbar" dir="ltr">

      <div className="navbar-brand">

        <a href="#home" className="navbar-logo">
          کهن تجارت رایکا
        </a>

        <button
          type="button"
          className={`navbar-music-button ${
            isMusicPlaying ? "playing" : ""
          }`}
          onClick={handleMusicClick}
          aria-label={
            isMusicPlaying ? "توقف موزیک" : "پخش موزیک"
          }
          title={
            isMusicPlaying ? "توقف موزیک" : "پخش موزیک"
          }
        >
          <span>♪</span>
        </button>

      </div>

      <ul className="navbar-menu" dir="rtl">

        <li>
          <a href="#home">خانه</a>
        </li>

        <li>
          <a href="#products">محصولات</a>
        </li>

        <li>
          <a href="#education">مراقبت و آموزش</a>
        </li>

        <li>
          <a href="#about">درباره ما</a>
        </li>

        <li>
          <a href="#contact">تماس با ما</a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;

