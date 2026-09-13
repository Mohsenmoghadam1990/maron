import "./WhyRaika.css";

import {
  FaAward,
  FaGlobe,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";

function WhyRaika() {
  const features = [
    {
      icon: <FaAward />,
      title: "کیفیت برتر",
      text: "استفاده از مواد اولیه مرغوب، فناوری‌های روز و فرمولاسیون پیشرفته برای ارائه محصولاتی باکیفیت، ایمن و قابل اعتماد.",
    },

    {
      icon: <FaGlobe />,
      title: "حضور گسترده",
      text: "با بهره‌گیری از شبکه توزیع گسترده و همکاری با شرکای معتبر، محصولات رایکا در بازارهای داخلی و بین‌المللی عرضه می‌شوند.",
    },

    {
      icon: <FaHeart />,
      title: "مراقبت از خانواده",
      text: "توجه به بهداشت، راحتی و کیفیت، با هدف ارائه محصولاتی مناسب برای نیازهای متنوع خانواده‌ها و ایجاد تجربه‌ای مطمئن‌تر.",
    },

    {
      icon: <FaCheckCircle />,
      title: "استاندارد و اطمینان",
      text: "تولید و عرضه محصولات با تکیه بر استانداردهای کیفی و الزامات بین‌المللی، همراه با تولید محصولات تحت لیسانس BIKOMA آلمان.",
    },
  ];

  return (
    <section className="why-raika-section">

      {/* =====================================================
          BACKGROUND OVERLAY
      ===================================================== */}

      <div className="why-raika-overlay"></div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="why-raika-container">


        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="why-raika-heading">

          <span className="why-raika-small-title">
            چرا رایکا؟
          </span>


        


          <div className="why-raika-line"></div>


          <p className="why-raika-intro">
            کیفیت، اطمینان و آرامش؛ تعهدی که در هر انتخاب
            همراه خانواده‌هاست.
          </p>


          

        </div>


        {/* =====================================================
            FEATURES
        ===================================================== */}

        <div className="why-raika-grid">

          {features.map((feature, index) => (
            <div
              className="why-raika-card"
              key={index}
            >

              {/* ICON */}

              <div className="why-raika-icon">
                {feature.icon}
              </div>


              {/* CONTENT */}

              <div className="why-raika-card-content">

                <h2>
                  {feature.title}
                </h2>

                <p>
                  {feature.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyRaika;