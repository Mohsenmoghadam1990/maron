
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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

  /*
  =========================================================
    SCROLL TO HOME SECTION
  =========================================================
  */

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();

    /*
      اگر در صفحه اصلی هستیم،
      فقط به همان بخش اسکرول می‌کنیم.
    */

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    /*
      اگر در یکی از صفحات دیگر هستیم،
      اول به صفحه اصلی می‌رویم.
    */

    navigate("/");

    /*
      بعد از برگشت به Home،
      به بخش مورد نظر اسکرول می‌کنیم.
    */

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <nav className="navbar" dir="ltr">

      {/* =====================================================
          BRAND
      ===================================================== */}

      <div className="navbar-brand">

        <button
          type="button"
          className="navbar-logo"
          onClick={(event) =>
            handleSectionClick(event, "home")
          }
        >
          کهن تجارت رایکا
        </button>

        <button
          type="button"
          className={`navbar-music-button ${
            isMusicPlaying ? "playing" : ""
          }`}
          onClick={handleMusicClick}
          aria-label={
            isMusicPlaying
              ? "توقف موزیک"
              : "پخش موزیک"
          }
          title={
            isMusicPlaying
              ? "توقف موزیک"
              : "پخش موزیک"
          }
        >
          <span>♪</span>
        </button>

      </div>

      {/* =====================================================
          MENU
      ===================================================== */}

      <ul className="navbar-menu" dir="rtl">

        <li>
          <a
            href="#home"
            onClick={(event) =>
              handleSectionClick(event, "home")
            }
          >
            خانه
          </a>
        </li>

        <li>
          <a
            href="#products"
            onClick={(event) =>
              handleSectionClick(event, "products")
            }
          >
            محصولات
          </a>
        </li>

        <li>
          <a
            href="#education"
            onClick={(event) =>
              handleSectionClick(event, "education")
            }
          >
            مراقبت و آموزش
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={(event) =>
              handleSectionClick(event, "about")
            }
          >
            درباره ما
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={(event) =>
              handleSectionClick(event, "contact")
            }
          >
            تماس با ما
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;

