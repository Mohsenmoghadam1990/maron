
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiHeart,
  FiShoppingBag,
  FiDroplet,
  FiStar,
  FiBookOpen,
  FiSmile,
  FiArrowRight,
  FiArrowUp,
} from "react-icons/fi";

import "./CustomBox.css";
import box2Bg from "../assets/box-2.jpg";


function CustomBox() {
  const [isReady, setIsReady] = useState(false);


  /* =========================================================
     BOX ITEMS
  ========================================================= */

  const boxItems = [
    {
      icon: <FiHeart />,
      title: "محصول بهداشتی",
      text: "یک محصول بهداشتی مناسب برای روزهایی که پریود می‌شوی.",
    },
    {
      icon: <FiShoppingBag />,
      title: "لباس زیر اضافه",
      text: "یک لباس زیر تمیز و اضافه، برای وقتی که بهش نیاز پیدا می‌کنی.",
    },
    {
      icon: <FiDroplet />,
      title: "دستمال بهداشتی",
      text: "برای اینکه همیشه تمیز و راحت باشی.",
    },
    {
      icon: <FiStar />,
      title: "مراقبت شخصی",
      text: "چند وسیله ساده که کمک می‌کنند در این روزها راحت‌تر باشی.",
    },
    {
      icon: <FiBookOpen />,
      title: "راهنمای اولین پریود",
      text: "یک راهنمای ساده و دوست‌داشتنی تا بدانی در اولین پریود چه اتفاقی می‌افتد.",
    },
    {
      icon: <FiSmile />,
      title: "همراه آرامش‌بخش",
      text: "یک همراه کوچک برای اینکه این روزها را با حس خوب و آرامش بیشتری بگذرانی.",
    },
  ];


  /* =========================================================
     BACK TO TOP
  ========================================================= */

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };


  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="custom-box-page">

      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <Link
        id="custom-box-back-button-fixed"
        to="/first-period"
        className="custom-box-back"
        aria-label="بازگشت به صفحه اولین پریود"
      >
        <FiArrowRight />
        <span>بازگشت</span>
      </Link>


      {/* =====================================================
          MAIN SECTION
      ===================================================== */}

      <section className="custom-box-section">

        <div className="custom-box-container">


          {/* =================================================
              HEADER
          ================================================= */}

          <header className="custom-box-heading">

            <p className="custom-box-label">
              اولین پریود، یک شروع تازه 🌸
            </p>

            <h1>
              باکس آمادگی
              <span> اولین پریود 🎀</span>
            </h1>

            <div className="custom-box-line"></div>

            <p className="custom-box-description">
              یک باکس ساده و کاربردی برای اینکه وسایل ضروری
              را از قبل آماده داشته باشی و با آرامش بیشتری
              با اولین پریودت روبه‌رو شوی.
            </p>

          </header>


          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div className="custom-box-main">


            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="custom-box-image-wrapper">

              <div className="custom-box-image">

                <img
                  src={box2Bg}
                  alt="باکس آمادگی اولین پریود"
                  className="custom-box-image-real"
                />

                <div className="custom-box-image-overlay"></div>

                <div className="custom-box-image-content">

                  <span className="custom-box-image-icon">
                    🎀
                  </span>

                  <h2>
                    باکس آمادگی
                  </h2>

                  <p>
                    برای یک شروع آرام و مطمئن
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="custom-box-content">

              <span className="custom-box-small-title">
                محتویات باکس
              </span>

              <h2 className="custom-box-content-title">
                همه چیز برای
                <span> یک شروع آرام</span>
              </h2>

              <p className="custom-box-intro">
                داشتن وسایل مورد نیاز از قبل، می‌تواند نگرانی
                و استرس اولین پریود را کمتر کند. این باکس برای
                آمادگی، آگاهی و احساس آرامش بیشتر طراحی شده است.
              </p>


              {/* =================================================
                  ITEMS
              ================================================= */}

              <div className="custom-box-items">

                {boxItems.map((item, index) => (

                  <div
                    className="custom-box-item"
                    key={index}
                  >

                    <div className="custom-box-item-icon">
                      {item.icon}
                    </div>

                    <div className="custom-box-item-text">

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>


              {/* =================================================
                  READY BUTTON
              ================================================= */}

              <button
                type="button"
                className={`custom-box-ready ${
                  isReady ? "active" : ""
                }`}
                onClick={() => setIsReady(!isReady)}
              >
                {isReady
                  ? "✓ من برای اولین پریود آماده‌ام"
                  : "باکس من آماده است 🎀"}
              </button>


              {/* =================================================
                  SUCCESS
              ================================================= */}

              {isReady && (

                <div className="custom-box-success">

                  <span className="success-icon">
                    🌷
                  </span>

                  <div>

                    <strong>
                      حالا آماده‌تری 💗
                    </strong>

                    <p>
                      حالا دیگه می‌دونی چه چیزهایی لازم داری
                      و چطور بیشتر مراقب خودت باشی.
                      اولین پریود یه اتفاق طبیعیه و بخشی از
                      بزرگ شدنه؛ پس خیالت راحت باشه،
                      آروم باش و با یک لبخند کوچولو به این
                      شروع تازه نگاه کن. 🎀🌸
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>


          {/* =================================================
              BOTTOM MESSAGE
          ================================================= */}

          <div className="custom-box-bottom">

            <span>🌸</span>

            <p>
              اولین پریود بخشی طبیعی از رشد است.
              آگاهی، آمادگی و مراقبت از خود می‌تواند
              این تجربه را آرام‌تر و راحت‌تر کند.
            </p>

            <span>🌸</span>

          </div>

        </div>


        {/* ===================================================
            BACK TO TOP
        =================================================== */}

        <button
          type="button"
          className="custom-box-top-button"
          onClick={backToTop}
          aria-label="بازگشت به بالای صفحه"
          title="بازگشت به بالا"
        >
          <FiArrowUp />
        </button>

      </section>

    </div>
  );
}


export default CustomBox;

