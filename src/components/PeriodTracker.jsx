
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PeriodTracker.css";

import periodBackground from "../assets/background-2.jpg";

function PeriodTracker() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [result, setResult] = useState(null);

  const calculatePeriod = () => {
    if (!startDate) {
      alert("لطفاً تاریخ شروع آخرین پریود را وارد کنید.");
      return;
    }

    const date = new Date(startDate);
    const cycle = Number(cycleLength);

    date.setDate(date.getDate() + cycle);

    const nextPeriod = date.toLocaleDateString("fa-IR");

    setResult({
      nextPeriod,
      cycle,
    });
  };

  return (
    <section
      className="period-tracker-page"
      style={{
        backgroundImage: `url(${periodBackground})`,
      }}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="period-tracker-bg"></div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="period-tracker-container">

        {/* =========================================================
            BACK BUTTON
            همان استایل صفحه اولین پریود
        ========================================================= */}

        <button
          type="button"
          className="period-back-button"
          onClick={() => navigate("/first-period")}
        >
          <span>→</span>
          <span>بازگشت</span>
        </button>

        {/* =========================================================
            MAIN TWO COLUMN SECTION
        ========================================================= */}

        <div className="period-main-grid">

          {/* =======================================================
              RIGHT COLUMN - PERIOD CALCULATOR
          ======================================================= */}

          <div className="period-calculator-column">

            {/* =====================================================
                CALCULATOR HEADING
            ===================================================== */}

            <div className="period-heading">

              <div className="period-heading-icon">
                📅
              </div>

              <h1>
                روز شمار <span>پریود</span>
              </h1>

              <div className="period-heading-line"></div>

              <p>
                چرخه قاعدگی از روز اول یک پریود تا روز اول
                پریود بعدی محاسبه می‌شود.
              </p>

              <p>
                ثبت تاریخ پریودها می‌تواند به شناخت بهتر
                الگوی چرخه کمک کند.
              </p>

            </div>

            {/* =====================================================
                CALCULATOR
            ===================================================== */}

            <div className="period-calculator">

              {/* START DATE */}

              <div className="period-field">

                <label htmlFor="period-start-date">
                  <span className="field-icon">
                    📅
                  </span>

                  تاریخ شروع آخرین پریود
                </label>

                <div className="period-input-wrapper">

                  <input
                    id="period-start-date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />

                </div>

              </div>

              {/* CYCLE LENGTH */}

              <div className="period-field">

                <label htmlFor="period-cycle-length">

                  <span className="field-icon">
                    🌸
                  </span>

                  طول چرخه پریود

                </label>

                <div className="period-input-wrapper">

                  <select
                    id="period-cycle-length"
                    value={cycleLength}
                    onChange={(e) =>
                      setCycleLength(e.target.value)
                    }
                  >
                    <option value="21">21 روز</option>
                    <option value="22">22 روز</option>
                    <option value="23">23 روز</option>
                    <option value="24">24 روز</option>
                    <option value="25">25 روز</option>
                    <option value="26">26 روز</option>
                    <option value="27">27 روز</option>
                    <option value="28">28 روز</option>
                    <option value="29">29 روز</option>
                    <option value="30">30 روز</option>
                    <option value="31">31 روز</option>
                    <option value="32">32 روز</option>
                    <option value="33">33 روز</option>
                    <option value="34">34 روز</option>
                    <option value="35">35 روز</option>
                  </select>

                </div>

              </div>

              {/* CALCULATE BUTTON */}

              <button
                type="button"
                className="period-calculate-button"
                onClick={calculatePeriod}
              >
                <span>
                  محاسبه پریود بعدی
                </span>

                <span>
                  ←
                </span>
              </button>

              {/* RESULT */}

              {result && (
                <div className="period-result">

                  <div className="result-icon">
                    🌸
                  </div>

                  <p className="result-title">
                    تاریخ تقریبی پریود بعدی
                  </p>

                  <div className="result-date">
                    {result.nextPeriod}
                  </div>

                  <p className="result-cycle">
                    بر اساس چرخه {result.cycle} روزه
                  </p>

                </div>
              )}

            </div>

          </div>

          {/* =======================================================
              LEFT COLUMN - CYCLE INFORMATION
          ======================================================= */}

          <section className="period-cycle-info">

            {/* CYCLE HEADING */}

            <div className="period-cycle-info-heading">

              <div className="period-cycle-info-icon">
                🔄
              </div>

              <div>

                <h2>
                  چرخه قاعدگی و تغییرات هورمونی
                </h2>

                <p>
                  آشنایی با تغییرات طبیعی بدن در طول چرخه قاعدگی
                </p>

              </div>

            </div>

            {/* INTRO */}

            <p className="period-cycle-info-intro">

              بدن زنان در یک چرخه معمولاً حدود ۲۸ روزه،
              نوساناتی در سطح{" "}

              <strong>
                استروژن و پروژسترون
              </strong>{" "}

              دارد که می‌تواند بر باروری، انرژی و احساسات
              تأثیر بگذارد.

            </p>

            {/* =====================================================
                CYCLE STAGES
            ===================================================== */}

            <div className="period-cycle-stages">

              {/* STAGE 1 */}

              <article className="period-cycle-stage">

                <div className="period-cycle-number">
                  ۱
                </div>

                <div className="period-cycle-stage-content">

                  <h3>
                    قاعدگی
                    <span>
                      روز ۱–۵
                    </span>
                  </h3>

                  <p>
                    خونریزی به‌دلیل ریزش پوشش رحم اتفاق
                    می‌افتد. سطح هورمون‌ها پایین است و
                    ممکن است خستگی و بی‌حوصلگی بیشتر
                    احساس شود.
                  </p>

                </div>

              </article>

              {/* STAGE 2 */}

              <article className="period-cycle-stage">

                <div className="period-cycle-number">
                  ۲
                </div>

                <div className="period-cycle-stage-content">

                  <h3>
                    فاز فولیکولی
                    <span>
                      روز ۶–۱۳
                    </span>
                  </h3>

                  <p>
                    با افزایش استروژن، ممکن است انرژی،
                    تمرکز و احساس شادابی بیشتر شود.
                  </p>

                </div>

              </article>

              {/* STAGE 3 */}

              <article className="period-cycle-stage">

                <div className="period-cycle-number">
                  ۳
                </div>

                <div className="period-cycle-stage-content">

                  <h3>
                    تخمک‌گذاری
                    <span>
                      حدود روز ۱۴
                    </span>
                  </h3>

                  <p>
                    در این مرحله تخمک آزاد می‌شود و
                    معمولاً احتمال باروری بیشتر است.
                  </p>

                </div>

              </article>

              {/* STAGE 4 */}

              <article className="period-cycle-stage">

                <div className="period-cycle-number">
                  ۴
                </div>

                <div className="period-cycle-stage-content">

                  <h3>
                    فاز لوتئال
                    <span>
                      روز ۱۵–۲۸
                    </span>
                  </h3>

                  <p>
                    پروژسترون افزایش پیدا می‌کند و اگر
                    بارداری اتفاق نیفتد، سطح هورمون‌ها
                    کاهش یافته و ممکن است علائم PMS
                    ظاهر شوند.
                  </p>

                </div>

              </article>

            </div>

          </section>

        </div>

        {/* =========================================================
            FOOTER
        ========================================================= */}

        <div className="period-footer">

          <span>
            🌷
          </span>

          <p>
            شناخت چرخه قاعدگی می‌تواند به برنامه‌ریزی
            بهتر و مراقبت بیشتر از خود کمک کند.
          </p>

        </div>

      </div>

    </section>
  );
}

export default PeriodTracker;

