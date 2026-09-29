
import "./FirstPeriod.css";

import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

import firstPeriodBg from "../assets/firsr-1.jpg";

function FirstPeriod() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const [isGiftOpening, setIsGiftOpening] = useState(false);

  /* =========================================================
     EDUCATION CARDS
  ========================================================= */

  const educationCards = [
    {
      icon: "🌸",
      title: "اولین پریود چیست؟",
      text: "اولین پریود یا «منارک» معمولاً در دوران بلوغ اتفاق می‌افتد و نشانه‌ای طبیعی از شروع فعالیت دستگاه تولیدمثل است. آشنایی با تغییرات بدن می‌تواند نگرانی این دوران را کمتر کند.",
    },
    {
      icon: "🩷",
      title: "علائم نزدیک شدن اولین پریود",
      text: "پیش از اولین پریود، بدن به‌تدریج وارد مرحله بلوغ می‌شود. رشد سینه‌ها، رشد موهای بدن، تغییرات پوستی و ایجاد ترشحات واژن از تغییرات طبیعی این دوران هستند.",
    },
    {
      icon: "🍵",
      title: "مراقبت و آرامش در پریود",
      text: "نوشیدن آب کافی، استراحت مناسب، استفاده از گرمای ملایم و انجام فعالیت‌های سبک می‌تواند به ایجاد احساس راحتی بیشتر در دوران پریود کمک کند.",
    },
    {
      icon: "💗",
      title: "احساسات و تغییرات دوران بلوغ",
      text: "بلوغ فقط با تغییرات جسمی همراه نیست و ممکن است احساسات و خلق‌وخو نیز تغییر کنند. صحبت کردن با یک فرد قابل اعتماد می‌تواند به درک بهتر این تغییرات کمک کند.",
    },
    {
      icon: "🩸",
      title: "بهداشت دوران قاعدگی",
      text: "قبل و بعد از تعویض پد دست‌ها را بشویید، محصول قاعدگی را به‌طور منظم تعویض کنید و بهداشت فردی را رعایت کنید.",
    },
    {
      icon: "🌷",
      title: "تغذیه در دوران پریود",
      text: "نوشیدن آب کافی و داشتن تغذیه متعادل شامل میوه‌ها، سبزیجات، غلات کامل و منابع پروتئین می‌تواند به حفظ انرژی و دریافت مواد مغذی مورد نیاز بدن کمک کند.",
    },
    {
      icon: "🫶",
      title: "صحبت کردن درباره پریود",
      text: "پریود یک فرایند طبیعی بدن است و صحبت کردن درباره آن نباید باعث خجالت شود. صحبت با خانواده یا یک فرد قابل اعتماد می‌تواند به کاهش نگرانی کمک کند.",
    },
    {
      icon: "📅",
      title: "چرخه قاعدگی و روزشمار پریود",
      text: "چرخه قاعدگی از روز اول یک پریود تا روز اول پریود بعدی محاسبه می‌شود. ثبت تاریخ پریودها می‌تواند به شناخت بهتر الگوی چرخه کمک کند.",
      tracker: true,
    },
    {
      icon: "🌙",
      title: "خواب و استراحت",
      text: "خواب کافی به حفظ انرژی و بهتر شدن حال عمومی بدن کمک می‌کند. داشتن ساعت خواب منظم و استراحت کافی در دوران پریود اهمیت دارد.",
    },
    {
      icon: "🩺",
      title: "چه زمانی باید کمک بگیریم؟",
      text: "درد بسیار شدید، خونریزی غیرعادی، سرگیجه شدید یا علائمی که فعالیت‌های روزمره را مختل می‌کنند بهتر است نادیده گرفته نشوند.",
    },
  ];

  /* =========================================================
     SLIDER
  ========================================================= */

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const card = slider.querySelector(".education-care-card");

    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;

    const styles = window.getComputedStyle(slider);

    const gap = parseFloat(styles.gap) || 0;

    slider.scrollBy({
      left:
        direction === "right"
          ? -(cardWidth + gap)
          : cardWidth + gap,
      behavior: "smooth",
    });
  };

  /* =========================================================
     AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      scrollSlider("left");
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* =========================================================
     OPEN GIFT
  ========================================================= */

  const openGift = () => {
    if (isGiftOpening) return;

    setIsGiftOpening(true);

    setTimeout(() => {
      navigate("/custom-box");
    }, 1300);
  };

  /* =========================================================
     BACK TO TOP
  ========================================================= */

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     FIXED BACK BUTTON
     فقط دکمه «بازگشت» داخل body قرار می‌گیرد.
  ========================================================= */

  useEffect(() => {
    const updateBackButton = () => {
      const backButton = document.getElementById(
        "first-period-back-button-fixed"
      );

      if (backButton) {
        backButton.style.top = `${window.scrollY + 25}px`;
        backButton.style.right = "25px";
      }
    };

    updateBackButton();

    window.addEventListener("scroll", updateBackButton, {
      passive: true,
    });

    window.addEventListener("resize", updateBackButton);

    return () => {
      window.removeEventListener("scroll", updateBackButton);
      window.removeEventListener("resize", updateBackButton);
    };
  }, []);

  /* =========================================================
     PORTAL
     دکمه بازگشت به صفحه اصلی
  ========================================================= */

  const fixedButtons =
    typeof document !== "undefined"
      ? createPortal(
          <button
            id="first-period-back-button-fixed"
            type="button"
            className="first-period-back-button"
            onClick={() => navigate("/")}
            aria-label="بازگشت به صفحه اصلی"
          >
            <span className="back-arrow">→</span>
            <span>بازگشت</span>
          </button>,
          document.body
        )
      : null;

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      {fixedButtons}

      <section
        className="first-period-section"
        style={{
          "--first-period-image": `url(${firstPeriodBg})`,
        }}
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="first-period-background"></div>

        {/* =====================================================
            FLOATING HEARTS
        ===================================================== */}

        <div className="heart-background">
          <span className="floating-heart heart-1">♥</span>
          <span className="floating-heart heart-2">♥</span>
          <span className="floating-heart heart-3">♥</span>
          <span className="floating-heart heart-4">♥</span>
          <span className="floating-heart heart-5">♥</span>
          <span className="floating-heart heart-6">♥</span>
        </div>

        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}

        <div className="first-period-container">
          {/* ===================================================
              PAGE HEADING
          =================================================== */}

          <div className="first-period-heading">
            <div className="heading-line"></div>

            <h2>
              اولین پریود دخترانمون را به یک خاطره خوب تبدیل کنیم
            </h2>

            <p>اولین تجربه، با آگاهی بیشتر</p>
          </div>

          {/* ===================================================
              EDUCATION SLIDER
          =================================================== */}

          <div className="education-care-wrapper">
            <button
              type="button"
              className="education-slider-arrow right"
              onClick={() => scrollSlider("right")}
              aria-label="مطالب قبلی"
            >
              ‹
            </button>

            <div
              ref={sliderRef}
              className="education-care-list"
            >
              {educationCards.map((card, index) => (
                <article
                  className="education-care-card"
                  key={index}
                >
                  <div className="education-care-card-icon">
                    {card.icon}
                  </div>

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>

                  {card.tracker && (
                    <button
                      type="button"
                      className="card-tracker-button"
                      onClick={() =>
                        navigate("/period-tracker")
                      }
                    >
                      <span>📅</span>

                      <span>
                        ورود به روزشمار پریود
                      </span>

                      <strong>←</strong>
                    </button>
                  )}
                </article>
              ))}
            </div>

            <button
              type="button"
              className="education-slider-arrow left"
              onClick={() => scrollSlider("left")}
              aria-label="مطالب بعدی"
            >
              ›
            </button>
          </div>

          {/* ===================================================
              SLIDER HINT
          =================================================== */}

          <div className="education-slider-hint">
            <span>←</span>

            <span>
              برای دیدن مطالب بیشتر ورق بزنید
            </span>

            <span>→</span>
          </div>

          {/* ===================================================
              CUSTOM GIFT BOX
          =================================================== */}

          <div className="period-gift-card">
            <div className="gift-bg-circle gift-bg-circle-1"></div>
            <div className="gift-bg-circle gift-bg-circle-2"></div>

            <div className="gift-content">
              <div className="gift-small-title">
                یک شروع شیرین و دوست‌داشتنی 🌸
              </div>

              <h3>باکس اولین پریودی 😍</h3>

              <p>
                «اولین بار همیشه مهمه! هپی لیدی کنارتونه تا این
                تجربه رو آسون، راحت و بی‌دغدغه شروع کنی.»
              </p>
            </div>

            <div className="gift-box-area">
              <div className="gift-glow"></div>

              <div
                className={`gift-box ${
                  isGiftOpening ? "gift-box-opening" : ""
                }`}
                onClick={openGift}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    openGift();
                  }
                }}
                aria-label="ساخت باکس اختصاصی"
              >
                <div className="gift-lid">
                  <div className="gift-lid-highlight"></div>

                  <div className="gift-lid-ribbon"></div>

                  <div className="gift-bow">
                    <div className="bow-left"></div>
                    <div className="bow-right"></div>
                    <div className="bow-center"></div>
                  </div>
                </div>

                <div className="gift-body">
                  <div className="gift-ribbon"></div>

                  <div className="gift-shine"></div>

                  <div className="gift-label">
                    HAPPY LADY
                  </div>

                  <button
                    type="button"
                    className="gift-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openGift();
                    }}
                    disabled={isGiftOpening}
                  >
                    <span>ساخت باکس اختصاصی</span>

                    <strong>←</strong>
                  </button>
                </div>
              </div>

              <div className="gift-shadow"></div>

              <div className="gift-flower-item">
                🌸
              </div>

              <div className="gift-heart-item">
                🩷
              </div>

              <div className="gift-sparkle-item">
                ✨
              </div>

              <div className="gift-sparkle-item-2">
                ✨
              </div>
            </div>
          </div>

          {/* ===================================================
              BOTTOM NOTE
          ===================================================== */}

          <div className="first-period-note">
            <span className="note-heart">♥</span>

            <p>
              مهم‌ترین چیز این است که دخترانمان بدانند اولین
              پریود یک اتفاق طبیعی در زندگی است و می‌توانند
              بدون خجالت درباره احساسات و پرسش‌هایشان با یک
              فرد قابل اعتماد صحبت کنند.
            </p>
          </div>
        </div>

        {/* =====================================================
            BACK TO TOP
            این دکمه مستقیماً داخل SECTION قرار دارد.
        ===================================================== */}

        <button
          id="first-period-top-button-fixed"
          type="button"
          className="back-to-top-button"
          onClick={backToTop}
          aria-label="برگشت به بالای صفحه"
        >
          ↑
        </button>
      </section>
    </>
  );
}

export default FirstPeriod;

