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
            <span className="section__subtitle">FAQ</span>
            <h2 className="section__title">
              Frequent Questions<span>.</span>
            </h2>
            <p className="value__description">
              We always ready to help by providing the best service for you. We
              believe a good phone can make your life better.
            </p>
          </div>

          <div className="value__accordion">
            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <i className="bx bxs-shield-x value__accordion-icon"></i>
                <h3 className="value__accordion-title">Payment methods?</h3>
                <div className="value__accordion-arrow">
                  <i className="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div className="value__accordion-content">
                <p className="value__accordion-description">
                  We accept all means of payment, credit cards, debit cards,
                  cash payment withdrawing in the store and a month ago we
                  accepted cryptocurrencies.
                </p>
              </div>
            </div>

            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <i className="bx bxs-x-square value__accordion-icon"></i>
                {/* <!-- <i className='bx bxs-shield-x'></i> --> */}
                <h3 className="value__accordion-title">Deliveries?</h3>
                <div className="value__accordion-arrow">
                  <i className="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div className="value__accordion-content">
                <p className="value__accordion-description">
                  Of course! We ship with fedex or you can also request our
                  shipping service, for now we only ship in California.
                </p>
              </div>
            </div>

            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <i className="bx bxs-bar-chart-square value__accordion-icon"></i>
                {/* <!-- <i className='bx bxs-shield-x'></i> --> */}
                <h3 className="value__accordion-title">
                  How long is the warranty time?
                </h3>
                <div className="value__accordion-arrow">
                  <i className="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div className="value__accordion-content">
                <p className="value__accordion-description">
                  All equipment has a 1-month warranty with our store and a
                  1-year manufacturing warranty.
                </p>
              </div>
            </div>

            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <i className="bx bxs-check-square value__accordion-icon"></i>
                {/* <!-- <i className='bx bxs-shield-x'></i> --> */}
                <h3 className="value__accordion-title">Do you do wholesale?</h3>
                <div className="value__accordion-arrow">
                  <i className="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div className="value__accordion-content">
                <p className="value__accordion-description">
                  Yes, we sell wholesale, purchases over 10,000 USD. You can
                  send us an email with the subject Business!
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
