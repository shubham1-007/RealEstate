import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
// import 'residancy.css'
import "./residancy.css";
import data from "..//../utils/slider.json";
import { sliderSetings } from "../../utils/common";
const Residancy = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residancies</span>

        </div>
        <Swiper {...sliderSetings}>
        <SliderButtons/>
          {data.map((card, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                    <span>Lacs</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondayText">{card.detail}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Residancy;

const SliderButtons=()=>{
     const swiper=useSwiper()

    return(
        <div className="flexCenter r-button">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}