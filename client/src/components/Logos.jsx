import React from "react";

function Logos() {
  return (
    <section className="logos section">
      <div className="logos__container container grid">
        <div className="logos__img">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-4.png"
            alt=""
          />
        </div>

        <div className="logos__img">
          <img
            src="https://es.logodownload.org/wp-content/uploads/2018/10/apple-logo-11-863x1024.png"
            alt=""
          />
        </div>

        <div className="logos__img">
          <img
            src="https://es.logodownload.org/wp-content/uploads/2018/11/motorola-logo-11-1024x235.png"
            alt=""
          />
        </div>

        <div className="logos__img">
          <img
            src="https://es.logodownload.org/wp-content/uploads/2019/05/xiaomi-logo-51.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Logos;
