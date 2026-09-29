
import { useEffect, useState } from "react";

import {
  FiPhone,
  FiChevronDown,
  FiMapPin,
} from "react-icons/fi";

import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

import "./Cooperation.css";


function Cooperation() {
  const [showPhone, setShowPhone] = useState(false);
  const [showSecondPhone, setShowSecondPhone] = useState(false);


  /* =========================================================
     نمایش شماره دوم بعد از ۲ ثانیه
  ========================================================= */

  useEffect(() => {
    if (!showPhone) {
      setShowSecondPhone(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowSecondPhone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showPhone]);


  return (
    <section
      className="cooperation-section"
      id="contact"
      dir="rtl"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="cooperation-bg"></div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="cooperation-content">


        {/* ===================================================
            EYEBROW
        =================================================== */}

        <span className="cooperation-eyebrow">
          ارتباط با ما
        </span>


        {/* ===================================================
            TITLE
        =================================================== */}

        <h2 className="cooperation-title">
          همراه شما هستیم
        </h2>


        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <p className="cooperation-text">
          برای دریافت اطلاعات بیشتر، همکاری و ارتباط
          <br />
          با ما، در تماس باشید.
        </p>


        {/* ===================================================
            PHONE REVEAL
        =================================================== */}

        <div className="cooperation-phone">

          {!showPhone ? (

            <button
              type="button"
              className="phone-icon-button"
              onClick={() => setShowPhone(true)}
              aria-label="نمایش شماره‌های تماس"
              title="نمایش شماره‌های تماس"
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

              {/* شماره اول */}

              <a
                href="tel:+989124242108"
                className="phone-number-visible phone-first"
                dir="ltr"
              >
                0912 42 42 108
              </a>


              {/* شماره دوم */}

              {showSecondPhone && (
                <a
                  href="tel:+989127814982"
                  className="phone-number-visible phone-second"
                  dir="ltr"
                >
                  0912 78 14 982
                </a>
              )}

            </div>

          )}

        </div>


        {/* ===================================================
            ROTATING SOCIAL ICONS
        =================================================== */}

        <div className="cooperation-orbit">

          <div className="orbit-ring">


            {/* =================================================
                INSTAGRAM
                @maroon.cellulose
            ================================================= */}

            <a
              href="https://www.instagram.com/maroon.cellulose/"
              target="_blank"
              rel="noopener noreferrer"
              className="orbit-social orbit-instagram"
              aria-label="اینستاگرام مارون"
              title="@maroon.cellulose"
            >
              <FaInstagram />
            </a>


            {/* =================================================
                WHATSAPP
            ================================================= */}

            <a
              href="https://wa.me/989124242108"
              target="_blank"
              rel="noopener noreferrer"
              className="orbit-social orbit-whatsapp"
              aria-label="واتساپ"
              title="واتساپ"
            >
              <FaWhatsapp />
            </a>


            {/* =================================================
                TELEGRAM
            ================================================= */}

            <a
              href="https://t.me/+989124242108"
              target="_blank"
              rel="noopener noreferrer"
              className="orbit-social orbit-telegram"
              aria-label="تلگرام"
              title="تلگرام"
            >
              <FaTelegramPlane />
            </a>


          </div>

        </div>


        {/* ===================================================
            SALES REPRESENTATIVE
        =================================================== */}

        <div className="cooperation-representative">


          {/* =================================================
              ICON
          ================================================= */}

          <div className="representative-icon">
            <FiMapPin />
          </div>


          {/* =================================================
              INFO
          ================================================= */}

          <div className="representative-info">

            <span className="representative-label">
              نمایندگی فروش
            </span>

            <strong className="representative-name">
              محمدی
            </strong>

            <span className="representative-provinces">
              استان‌های قزوین و گیلان
            </span>

          </div>


        </div>


      </div>

    </section>
  );
}


export default Cooperation;
