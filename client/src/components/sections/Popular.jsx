import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Popular() {
  const { products } = useSelector((state) => state.searchBar);
  return (
    <section className="popular section" id="popular">
      <div className="container">
        <span className="section__subtitle">Best Choise</span>
        <h2 className="section__title">
          Popular Phones<span>.</span>
        </h2>

        <Swiper
          spaceBetween={32}
          grabCursor={true}
          slidesPerView={"auto"}
          loop={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="popular__container swiper">
            <div className="swiper-wrapper">
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link to={`/details/${product.id}`}>
                    <article className="popular__card swiper-slide">
                      <img
                        src={product.img_url}
                        alt=""
                        className="popular__img"
                      />

                      <div className="popular__data">
                        <h2 className="popular__price">
                          <span>$</span>
                          {product.price}
                        </h2>
                        <h3 className="popular__title">{product.name}</h3>
                      </div>
                    </article>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </div>
          <a
            className="view"
            href="/products"
            style={{ textDecoration: "none" }}
          >
            View all products
          </a>
        </Swiper>
      </div>
    </section>
  );
}

export default Popular;
