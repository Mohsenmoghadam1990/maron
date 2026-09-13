
import { useState, useEffect } from "react";

import "./Products.css";

import lady1 from "../assets/happy-lady/happy-lady-1.jpg";
import lady2 from "../assets/happy-lady/happy-lady-2.jpg";
import lady3 from "../assets/happy-lady/happy-lady-3.jpg";
import lady4 from "../assets/happy-lady/happy-lady-4.jpg";
import lady5 from "../assets/happy-lady/happy-lady-5.jpg";

import baby1 from "../assets/happy-baby/happy-baby-1.jpg";
import baby2 from "../assets/happy-baby/happy-baby-2.jpg";
import baby3 from "../assets/happy-baby/happy-baby-3.jpg";
import baby4 from "../assets/happy-baby/happy-baby-4.jpg";

function Products() {
  const [ladyIndex, setLadyIndex] = useState(0);
  const [babyIndex, setBabyIndex] = useState(0);

  /* =========================================================
     HAPPY LADY PRODUCTS
  ========================================================= */

  const ladyProducts = [
    {
      image: lady1,
      title: "Happy Lady",
    },
    {
      image: lady2,
      title: "Happy Lady",
    },
    {
      image: lady3,
      title: "Happy Lady",
    },
    {
      image: lady4,
      title: "Happy Lady",
    },
    {
      image: lady5,
      title: "Happy Lady",
    },
  ];

  /* =========================================================
     HAPPY BABY PRODUCTS
  ========================================================= */

  const babyProducts = [
    {
      image: baby1,
      title: "Happy Baby",
    },
    {
      image: baby2,
      title: "Happy Baby",
    },
    {
      image: baby3,
      title: "Happy Baby",
    },
    {
      image: baby4,
      title: "Happy Baby",
    },
  ];

  /* =========================================================
     HAPPY LADY AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    const ladyTimer = setInterval(() => {
      setLadyIndex(
        (prev) => (prev + 1) % ladyProducts.length
      );
    }, 3000);

    return () => clearInterval(ladyTimer);
  }, [ladyProducts.length]);

  /* =========================================================
     HAPPY BABY AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    const babyTimer = setInterval(() => {
      setBabyIndex(
        (prev) => (prev + 1) % babyProducts.length
      );
    }, 3500);

    return () => clearInterval(babyTimer);
  }, [babyProducts.length]);

  /* =========================================================
     GET VISIBLE PRODUCTS
  ========================================================= */

  const getVisibleProducts = (
    products,
    index,
    count
  ) => {
    return Array.from(
      { length: count },
      (_, i) =>
        products[(index + i) % products.length]
    );
  };

  const visibleLady = getVisibleProducts(
    ladyProducts,
    ladyIndex,
    3
  );

  const visibleBaby = getVisibleProducts(
    babyProducts,
    babyIndex,
    1
  );

  return (
    <section
      id="products"
      className="products-section"
      dir="rtl"
    >

      {/* =====================================================
          PRODUCTS TITLE / HEART MARQUEE
      ===================================================== */}

      <div className="products-heading">

        <div className="heart-marquee">
          <div className="heart-track">

            {/* قلب‌های توپر */}
            {Array.from({ length: 18 }).map(
              (_, index) => (
                <span
                  className="solid-heart"
                  key={`heart-${index}`}
                >
                  ♥
                </span>
              )
            )}

            {/* تکرار برای حرکت بدون قطع شدن */}
            {Array.from({ length: 18 }).map(
              (_, index) => (
                <span
                  className="solid-heart"
                  key={`duplicate-heart-${index}`}
                >
                  ♥
                </span>
              )
            )}

          </div>
        </div>

        {/* عنوان روی نوار */}
        <span className="products-title-text">
          محصولات ما
        </span>

      </div>


      {/* =====================================================
          HAPPY LADY
      ===================================================== */}

      <div className="category-block lady-category">

        <div className="lady-content">

          <div className="category-title">

            <p>
              مراقبت و آرامش بانوان
            </p>

            <h3>
              Happy Lady
            </h3>

          </div>


          <div className="product-slider lady-slider">

            {visibleLady.map(
              (product, index) => (

                <div
                  className="product-card"
                  key={`lady-${ladyIndex}-${index}`}
                >

                  <img
                    src={product.image}
                    alt={`${product.title} ${index + 1}`}
                  />

                </div>

              )
            )}

          </div>

        </div>

      </div>


      {/* =====================================================
          HAPPY BABY
      ===================================================== */}

      <div className="category-block baby-category">

        <div className="baby-overlay"></div>

        <div className="baby-content">

          <div className="category-title">

            <p>
              برای کوچولوهای دوست‌داشتنی
            </p>

            <h3>
              Happy Baby
            </h3>

          </div>


          <div className="product-slider baby-slider">

            {visibleBaby.map(
              (product, index) => (

                <div
                  className="product-card"
                  key={`baby-${babyIndex}-${index}`}
                >

                  <img
                    src={product.image}
                    alt={`${product.title} ${index + 1}`}
                  />

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Products;
