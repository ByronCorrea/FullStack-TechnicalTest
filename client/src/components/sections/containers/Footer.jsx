/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div>
          <a href="#" className="footer__logo">
            Tecno House <i className="bx bxs-home-smile"></i>
          </a>
          <p className="footer__description">
            Our vision is to help everyone find <br />
            the phone they deserve, the perfect phone.
          </p>
        </div>

        <div className="footer__content">
          <div>
            <h3 className="footer__title">About</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="footer__link">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="footer__link">
                  News & Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Company</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  How We Work?
                </a>
              </li>

              <li>
                <a href="#" className="footer__link">
                  Capital
                </a>
              </li>

              <li>
                <a href="#" className="footer__link">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Support</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="footer__link">
                  Support center
                </a>
              </li>

              <li>
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Follow Us</h3>

            <ul className="footer__social">
              <a href="" target="_blank" className="footer__social-link">
                <i className="bx bxl-facebook-circle"></i>
              </a>

              <a href="" target="_blank" className="footer__social-link">
                <i className="bx bxl-instagram-alt"></i>
              </a>

              <a href="" target="_blank" className="footer__social-link">
                <i className="bx bxl-pinterest"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__info container">
        <span className="footer__copy">
          &#169; Tecno House. All rigths reserved
        </span>

        <div className="footer__privacy">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
