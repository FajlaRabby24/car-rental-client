import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { useQuery } from "@tanstack/react-query";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Loading from "../../components/Loading";

const Feedbacks = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 768);
  const [isLaptop, setisLaptop] = useState(
    window.innerWidth > 767 && window.innerWidth < 1024
  );

  // calculate screen size
  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
      setisLaptop(window.innerWidth > 767 && window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // fetching data
  const { data: feedbacks, isLoading } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => fetch("/feedbacks.json").then((res) => res.json()),
    staleTime: Infinity,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-2">
      <h1 className="font-semibold text-4xl mb-8">Feedbacks</h1>

      <div className=" slideImage-container ">
        <div className="w-full max-w-full px-0 mx-auto">
          <div className=" mt-5 w-full ">
            <Swiper
              spaceBetween={30}
              slidesPerView={isMobile ? 2 : isLaptop ? 3 : 4}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper "
            >
              {feedbacks.map((feedback) => (
                <SwiperSlide key={feedback.id} className="w-full">
                  <div className="bg-base-200  w-full  rounded-xl px-5 py-3">
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
                    <p className="text-[#636262]">
                      {feedback.review.length > 70
                        ? `${feedback.review.slice(0, 68)}...`
                        : feedback.review}
                    </p>
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
