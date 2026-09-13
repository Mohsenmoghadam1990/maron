
import "./ProductsBoxPage.css";

import { useState } from "react";
import { Link } from "react-router-dom";

function ProductsBoxPage() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const products = [
    {
      id: 1,
      emoji: "🌸",
      title: "نوار بهداشتی",
      text: "محصول مناسب برای روزهای پریود",
    },
    {
      id: 2,
      emoji: "🩷",
      title: "پد روزانه",
      text: "برای احساس تمیزی و راحتی بیشتر",
    },
    {
      id: 3,
      emoji: "🎀",
      title: "دستمال بهداشتی",
      text: "برای مراقبت و بهداشت روزانه",
    },
    {
      id: 4,
      emoji: "✨",
      title: "کیسه مخصوص",
      text: "برای نگهداری محصولات بهداشتی",
    },
  ];

  const toggleProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id)
        ? prev.filter((productId) => productId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="products-box-page">

      <div className="products-box-container">

        {/* HEADER */}
        <div className="products-box-heading">

          <div className="products-box-icon">
            🌸
          </div>

          <p className="products-box-label">
            اولین پریود با عشق و مراقبت
          </p>

          <h1>
            انتخاب محصولات بهداشتی
          </h1>

          <div className="products-box-line"></div>

          <p className="products-box-description">
            محصولاتی که می‌خواهی داخل باکس اولین پریودی
            قرار بگیرند انتخاب کن.
          </p>

        </div>

        {/* PRODUCTS */}
        <div className="products-box-grid">

          {products.map((product) => {

            const isSelected = selectedProducts.includes(product.id);

            return (
              <div
                key={product.id}
                className={`products-box-card ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => toggleProduct(product.id)}
              >

                <div className="products-box-card-icon">
                  {product.emoji}
                </div>

                <h2>
                  {product.title}
                </h2>

                <p>
                  {product.text}
                </p>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleProduct(product.id);
                  }}
                >
                  {isSelected
                    ? "انتخاب شد ✓"
                    : "انتخاب محصول"}
                </button>

              </div>
            );
          })}

        </div>

        {/* SELECTED COUNT */}
        <div className="products-box-selected">

          {selectedProducts.length > 0 ? (
            <p>
              {selectedProducts.length} محصول برای باکس انتخاب شده است 🌷
            </p>
          ) : (
            <p>
              هنوز محصولی انتخاب نکرده‌ای.
            </p>
          )}

        </div>

        {/* BACK */}
        <Link
          to="/custom-box"
          className="products-box-back"
        >
          ← بازگشت به باکس
        </Link>

      </div>

    </section>
  );
}

export default ProductsBoxPage;

