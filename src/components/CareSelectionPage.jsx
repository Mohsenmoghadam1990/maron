
import "./CareSelectionPage.css";
import { Link } from "react-router-dom";

function CareSelectionPage() {
  const articles = [
    {
      icon: "☕",
      title: "دمنوش‌های مناسب دوران پریود",
      text: "با دمنوش‌های گرم و آرامش‌بخش، لحظات راحت‌تری را در دوران قاعدگی تجربه کن.",
    },
    {
      icon: "🔥",
      title: "راه‌های ساده برای آرامش بیشتر",
      text: "چند راهکار ساده برای ایجاد احساس راحتی و آرامش بیشتر در روزهای پریود.",
    },
    {
      icon: "🍎",
      title: "تغذیه در دوران قاعدگی",
      text: "با انتخاب خوراکی‌های مناسب، انرژی و حال بهتری در این دوران داشته باش.",
    },
    {
      icon: "🌙",
      title: "خواب راحت در دوران پریود",
      text: "چند نکته ساده برای داشتن خوابی آرام‌تر و راحت‌تر در روزهای قاعدگی.",
    },
    {
      icon: "🛁",
      title: "مراقبت و آرامش بدن",
      text: "روش‌های ساده‌ای برای مراقبت از بدن و ایجاد حس آرامش بیشتر.",
    },
    {
      icon: "💗",
      title: "سلامت روان در دوران پریود",
      text: "تغییرات احساسی طبیعی است؛ با شناخت بهتر احساساتت، این روزها را راحت‌تر سپری کن.",
    },
    {
      icon: "🌸",
      title: "اولین پریود؛ یک تجربه تازه",
      text: "آشنایی با تغییرات بدن و نکاتی که می‌توانند اولین تجربه را آرام‌تر کنند.",
    },
    {
      icon: "🧘",
      title: "حرکت و آرامش",
      text: "حرکت‌های ملایم و فعالیت مناسب می‌توانند به احساس بهتر در دوران پریود کمک کنند.",
    },
    {
      icon: "🩷",
      title: "بهداشت دوران قاعدگی",
      text: "نکات ساده و مهم برای رعایت بهداشت و احساس راحتی بیشتر در دوران پریود.",
    },
  ];

  return (
    <section className="care-page">
      <div className="care-page-container">

        {/* HEADER */}
        <header className="care-page-header">

          <Link
            to="/custom-box"
            className="care-back-button"
          >
            ← بازگشت به باکس
          </Link>

          <div className="care-header-icon">
            🩷
          </div>

          <p className="care-label">
            اولین پریود با عشق و مراقبت 🌸
          </p>

          <h1>
            مراقبت و <span>آرامش</span>
          </h1>

          <div className="care-header-line"></div>

          <p className="care-description">
            نکات ساده و کاربردی برای اینکه دوران قاعدگی
            را با آرامش، آگاهی و حس بهتر سپری کنیم.
          </p>

        </header>

        {/* CATEGORIES */}
        <nav className="care-categories">

          <a href="#care">🌸 مراقبت در دوران پریود</a>

          <a href="#nutrition">☕ تغذیه و دمنوش</a>

          <a href="#relax">🧘 آرامش و خواب</a>

          <a href="#body">💗 سلامت جسم</a>

          <a href="#mind">🧠 سلامت روان</a>

          <a href="#first-period">🌷 اولین پریود</a>

        </nav>

        {/* ARTICLE TITLE */}
        <div className="care-articles-heading">
          <span>آگاهی بیشتر، آرامش بیشتر</span>

          <h2>
            مطالبی برای روزهای <strong>بهتر</strong>
          </h2>
        </div>

        {/* ARTICLES */}
        <div className="care-articles">

          {articles.map((article, index) => (
            <article
              className="care-article-card"
              key={index}
            >

              <div className="care-article-image">
                <span>{article.icon}</span>
              </div>

              <div className="care-article-content">

                <span className="care-article-category">
                  مراقبت و آرامش
                </span>

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.text}
                </p>

                <button type="button">
                  ادامه مطلب
                  <span>←</span>
                </button>

              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="care-bottom">

          <div className="care-bottom-heart">
            ♥
          </div>

          <h3>
            مراقبت از خودت را فراموش نکن 🌷
          </h3>

          <p>
            آگاهی از بدن و توجه به نیازهای خودت،
            می‌تواند این روزها را آرام‌تر و دلپذیرتر کند.
          </p>

          <Link
            to="/custom-box"
            className="care-bottom-button"
          >
            ← بازگشت به ساخت باکس
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CareSelectionPage;

