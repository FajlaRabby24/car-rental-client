import React, { use, useEffect, useState } from "react";
import "./SlideImage.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { FaStarHalfStroke } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("/feedbacks.json")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  }, []);
  return (
    <div>
      <h1 className="font-semibold text-4xl mb-8">Feedbacks</h1>

      <div className=" slideImage-container">
        <div className="container">
          <div className=" mt-5">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {feedbacks.map((feedback) => (
                <SwiperSlide key={feedback.id}>
                  <div className="bg-[#f8f8f8]  rounded-xl px-5 py-3">
                    <img
                      src={feedback.image}
                      alt="user image"
                      className="w-[50px] rounded-full"
                    />
                    <div className="my-2">
                      <ReactStars
                        size={18}
                        count={5}
                        color={"gold"}
                        activeColor={"gold"}
                        value={feedback.rating}
                        a11y={true}
                        isHalf={true}
                        emptyIcon={<FaRegStar />}
                        halfIcon={<FaStarHalfStroke />}
                        filledIcon={<FaStar />}
                      />
                    </div>
                    <h4 className="font-semibold text-lg">{feedback.name}</h4>
                    <p className="text-[#636262]">{feedback.review}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
