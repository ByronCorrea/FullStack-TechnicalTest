import React, { useEffect } from "react";
import value from "../assets/IPhone_13_Pro.webp";

function Value() {
  useEffect(() => {
    /*=============== VALUE ACCORDION ===============*/
    const accordionItems = document.querySelectorAll(".value__accordion-item");

    accordionItems.forEach((item) => {
      const accordionHeader = item.querySelector(".value__accordion-header");

      accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");

        toggleItem(item);

        if (openItem && openItem !== item) {
          toggleItem(openItem);
        }
      });
    });

    const toggleItem = (item) => {
      const accordionContent = item.querySelector(".value__accordion-content");

      if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
      } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
      }
    };
  });

  return (
    <section className="value section" id="faq">
      <div className="value__container container grid">
        <div className="value__images">
          <img src={value} alt="" />
        </div>

        <div className="value__content">
          <div className="value__data">
            <span className="section__subtitle">Our Value</span>
            <h2 className="section__title">
              Value We Give To You<span>.</span>
            </h2>
            <p className="value__description">
              We always ready to help by providing the best service for you. We
              believe a good place to live can make your life better.
            </p>
          </div>

          <div className="value__accordion">
            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <i className="bx bxs-shield-x value__accordion-icon"></i>
                <h3 className="value__accordion-title">
                  Best interest rates on the market
                </h3>
                <div className="value__accordion-arrow">
                  <i className="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div className="value__accordion-content">
                <p className="value__accordion-description">
                  Price we provides is the best for you, we guarantee no price
                  changes on your property due to various unexpected costs that
                  may come.
                </p>
              </div>
            </div>

            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <i className="bx bxs-x-square value__accordion-icon"></i>
                {/* <!-- <i className='bx bxs-shield-x'></i> --> */}
                <h3 className="value__accordion-title">
                  Prevent unstable prices
                </h3>
                <div className="value__accordion-arrow">
                  <i className="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div className="value__accordion-content">
                <p className="value__accordion-description">
                  Price we provides is the best for you, we guarantee no price
                  changes on your property due to various unexpected costs that
                  may come.
                </p>
              </div>
            </div>

            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <i className="bx bxs-bar-chart-square value__accordion-icon"></i>
                {/* <!-- <i className='bx bxs-shield-x'></i> --> */}
                <h3 className="value__accordion-title">
                  Best prices on the market
                </h3>
                <div className="value__accordion-arrow">
                  <i className="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div className="value__accordion-content">
                <p className="value__accordion-description">
                  Price we provides is the best for you, we guarantee no price
                  changes on your property due to various unexpected costs that
                  may come.
                </p>
              </div>
            </div>

            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <i className="bx bxs-check-square value__accordion-icon"></i>
                {/* <!-- <i className='bx bxs-shield-x'></i> --> */}
                <h3 className="value__accordion-title">
                  Security of your data
                </h3>
                <div className="value__accordion-arrow">
                  <i className="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div className="value__accordion-content">
                <p className="value__accordion-description">
                  Price we provides is the best for you, we guarantee no price
                  changes on your property due to various unexpected costs that
                  may come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Value;
