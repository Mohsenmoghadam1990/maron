import "./Education.css";
import { useNavigate } from "react-router-dom";

function Education() {
  const navigate = useNavigate();

  const handleFirstPeriod = () => {
    navigate("/first-period");
  };

  return (
    <section id="education" className="education-section">
      {/* ===================================================
          BACKGROUND OVERLAY
      =================================================== */}

      <div className="education-overlay"></div>

      {/* ===================================================
          CONTAINER
      =================================================== */}

      <div className="education-container">

        {/* =================================================
            EDUCATION CONTENT
        ================================================= */}

        <div className="education-content">

          {/* SMALL TITLE */}
          <p className="education-label">
            آگاهی، آرامش و مراقبت
          </p>

          {/* MAIN TITLE */}
          <h2>
            آموزش و آگاهی درباره
            <span> دوران قاعدگی</span>
          </h2>

          {/* DECORATIVE LINE */}
          <div className="education-line"></div>

          {/* TEXT 1 */}
          <p className="education-text">
            دوران قاعدگی بخشی طبیعی از زندگی هر دختر و زن است.
            شناخت بدن و آگاهی از تغییرات این دوران می‌تواند به
            داشتن تجربه‌ای آرام‌تر و سالم‌تر کمک کند.
          </p>

          {/* TEXT 2 */}
          <p className="education-text">
            ما اینجا هستیم تا اطلاعات مفید و ساده‌ای درباره
            قاعدگی، مراقبت‌های بهداشتی و سلامت بانوان در اختیار
            شما قرار دهیم.
          </p>

          {/* BUTTON */}
          <button
            type="button"
            className="education-button"
            onClick={handleFirstPeriod}
          >
            <span>بیشتر بدانید</span>

            <span className="education-button-arrow">
              ←
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}

export default Education;