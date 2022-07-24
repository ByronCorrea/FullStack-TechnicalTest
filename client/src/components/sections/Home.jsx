import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Home1 from "../assets/IphoneHome.png";
import SearchBar from "./SearchBar/SearchBar";

function Home() {
  useEffect(() => {
    /*=============== DARK LIGHT THEME ===============*/
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "bx-sun";

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
        iconTheme
      );
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener("click", () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    });

    /*=============== SCROLL REVEAL ANIMATION ===============*/
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 400,
      reset: true,
    });

    sr.reveal(
      `.home__title, .popular__container, .subscribe__container, .footer__container`
    );
    sr.reveal(`.home__description, .footer__info`, { delay: 500 });
    sr.reveal(`.home__search`, { delay: 600 });
    sr.reveal(`.home__value`, { delay: 700 });
    sr.reveal(`.home__images`, { delay: 800, origin: "bottom" });
    sr.reveal(`.logos__img`, { interval: 100 });
    sr.reveal(`.value__images, .contact__content`, { origin: "left" });
    sr.reveal(`.value__content, .contact__images`, { origin: "right" });
  });
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">
            Discover
            <br />
            Latest In <br />
            Technology
          </h1>
          <p className="home__description">
            Find a variety of phones that suit you very easily, forget all
            difficulties in finding the best phone for you.
          </p>

          <SearchBar />

          <div className="home__value">
            <div>
              <h1 className="home__value-number">
                9k <span>+</span>
              </h1>
              <span className="home__value-description">
                Premium <br />
                Product
              </span>
            </div>

            <div>
              <h1 className="home__value-number">
                2k <span>+</span>
              </h1>
              <span className="home__value-description">
                Happy <br />
                Customer
              </span>
            </div>

            <div>
              <h1 className="home__value-number">
                28k <span>+</span>
              </h1>
              <span className="home__value-description">
                Awards <br />
                Winning
              </span>
            </div>
          </div>
        </div>

        <div className="home__images">
          <div className="home__orbe"></div>

          <div className="home__img">
            <img src={Home1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
