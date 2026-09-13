import { useState } from "react";
import { FiPhone, FiChevronDown } from "react-icons/fi";
import "./Cooperation.css";

function Cooperation() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section
      className="cooperation-section"
      id="contact"
      dir="rtl"
    >

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="cooperation-bg"></div>


      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="cooperation-content">

        {/* =========================================================
            EYEBROW
        ========================================================= */}

        <span className="cooperation-eyebrow">
          ارتباط با ما
        </span>


        {/* =========================================================
            TITLE
        ========================================================= */}

        


        {/* =========================================================
            DESCRIPTION
        ========================================================= */}

        <p className="cooperation-text">
          برای ارتباط با کهن تجارت رایکا
          <br />
          با ما در تماس باشید.
        </p>


        {/* =========================================================
            PHONE
        ========================================================= */}

        <div className="cooperation-phone">

          {!showPhone ? (
            <button
              type="button"
              className="phone-icon-button"
              onClick={() => setShowPhone(true)}
              aria-label="نمایش شماره تماس"
            >
              <span className="phone-icon-circle">
                <FiPhone />
              </span>

              

              <span className="phone-arrow">
                <FiChevronDown />
              </span>
            </button>
          ) : (
            <div className="phone-revealed">

              

              <a
                href="tel:+989124242108"
                className="phone-number-visible"
                dir="ltr"
              >
                +98 912 424 2108
              </a>

            </div>
          )}

        </div>


        {/* =========================================================
            BRAND
        ========================================================= */}

        

      </div>

    </section>
  );
}

export default Cooperation;