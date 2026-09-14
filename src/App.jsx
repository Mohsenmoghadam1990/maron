import "./App.css";

import {
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import MusicBar from "./components/MusicBar";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Education from "./components/Education";
import FirstPeriod from "./components/FirstPeriod";
import WhyRaika from "./components/WhyRaika";
import About from "./components/About";
import CustomBox from "./components/CustomBox";
import ProductsBoxPage from "./components/ProductsBoxPage";
import PeriodTracker from "./components/PeriodTracker";
import HeartBanner from "./components/HeartBanner";
import Cooperation from "./components/Cooperation";

import heroImage from "./assets/product-1.jpg";

/* =========================================================
   HOME PAGE
========================================================= */

function HomePage() {
  return (
    <div className="site" id="home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-area">

        {/* =================================================
            HERO IMAGE
        ================================================= */}

        <img
          src={heroImage}
          alt="Raika"
          className="hero-image"
        />

        {/* =================================================
            NAVBAR OVER HERO
        ================================================= */}

        <header className="header-area">
          <div className="top-navigation">
            <Navbar />
          </div>
        </header>

        {/* =================================================
            MUSIC
        ================================================= */}

        <MusicBar />

        {/* =================================================
            FLOATING HEARTS
        ================================================= */}

        <HeartBanner />

      </section>

      {/* =====================================================
          HOME SECTIONS
      ===================================================== */}

      <Products />

      <Education />

      <WhyRaika />

      <About />

      <Cooperation />

    </div>
  );
}

/* =========================================================
   FIRST PERIOD PAGE
========================================================= */

function FirstPeriodPage() {
  return (
    <div className="site">
      <FirstPeriod />
    </div>
  );
}

/* =========================================================
   CARE SELECTION PAGE
========================================================= */

function CareSelectionPage() {
  return (
    <div className="custom-selection-page">

      <div className="custom-selection-container">

        <div className="custom-selection-icon">
          🩷
        </div>

        <p className="custom-selection-label">
          اولین پریود با عشق و مراقبت
        </p>

        <h1>
          مراقبت و آرامش
        </h1>

        <p>
          آیتم‌هایی برای آرامش و احساس بهتر انتخاب کن.
        </p>

        <Link
          to="/custom-box"
          className="custom-selection-back"
        >
          ← بازگشت به باکس
        </Link>

      </div>

    </div>
  );
}

/* =========================================================
   STYLE SELECTION PAGE
========================================================= */

function StyleSelectionPage() {
  return (
    <div className="custom-selection-page">

      <div className="custom-selection-container">

        <div className="custom-selection-icon">
          🎀
        </div>

        <p className="custom-selection-label">
          اولین پریود با عشق و مراقبت
        </p>

        <h1>
          ظاهر باکس
        </h1>

        <p>
          رنگ و ظاهر باکس اولین پریودی خودت را انتخاب کن.
        </p>

        <Link
          to="/custom-box"
          className="custom-selection-back"
        >
          ← بازگشت به باکس
        </Link>

      </div>

    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <HashRouter>

      <Routes>

        {/* =================================================
            HOME
        ================================================= */}

        <Route
          path="/"
          element={<HomePage />}
        />

        {/* =================================================
            FIRST PERIOD
        ================================================= */}

        <Route
          path="/first-period"
          element={<FirstPeriodPage />}
        />

        {/* =================================================
            CUSTOM BOX
        ================================================= */}

        <Route
          path="/custom-box"
          element={<CustomBox />}
        />

        {/* =================================================
            PERIOD TRACKER
        ================================================= */}

        <Route
          path="/period-tracker"
          element={<PeriodTracker />}
        />

        {/* =================================================
            CUSTOM BOX PRODUCTS
        ================================================= */}

        <Route
          path="/custom-box/products"
          element={<ProductsBoxPage />}
        />

        {/* =================================================
            CUSTOM BOX CARE
        ================================================= */}

        <Route
          path="/custom-box/care"
          element={<CareSelectionPage />}
        />

        {/* =================================================
            CUSTOM BOX STYLE
        ================================================= */}

        <Route
          path="/custom-box/style"
          element={<StyleSelectionPage />}
        />

      </Routes>

    </HashRouter>
  );
}

export default App;