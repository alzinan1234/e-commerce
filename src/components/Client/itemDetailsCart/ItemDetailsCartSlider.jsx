import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import image1 from "@/assets/categorys/hoodie.jpeg";
import image2 from "@/assets/categorys/jacket.jpeg";
import image3 from "@/assets/categorys/polo.jpg";
import image4 from "@/assets/categorys/sweater.jpeg";
import image5 from "@/assets/categorys/jacket.jpeg";
import image6 from "@/assets/categorys/blazer.jpeg";
import "./ItemDetails.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ItemDetailsCartSlider = () => {
  const [displayImage, setDisplayImage] = useState(image6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide
  const sliderRef = useRef(null);

  const handleImageClick = (image) => {
    setDisplayImage(image);
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleAfterChange = (current) => {
    setActiveSlide(current); // Update the active slide index
    const currentSlide = academicData[current];
    if (currentSlide) {
      setDisplayImage(currentSlide.image);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const academicData = [
    {
      id: "1",
      image: image1,
    },
    {
      id: "2",
      image: image2,
    },
    {
      id: "3",
      image: image3,
    },
    {
      id: "4",
      image: image4,
    },
    {
      id: "5",
      image: image5,
    },
  ];

  const imgContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = imgContainerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; // X coordinate relative to the image
    const y = e.clientY - rect.top; // Y coordinate relative to the image

    const img = container.querySelector("img");
    img.style.transformOrigin = `${(x / rect.width) * 100}% ${
      (y / rect.height) * 100
    }%`;
  };

  return (
    <div className="">
      <div className="relative flex justify-center items-center md:border-l-2 md:border-r-2 border-[#003366]  rounded-md ">
        <Image
          className="project-main-image rounded-md cursor-pointer"
          src={displayImage}
          alt="Main display"
          width={700}
          height={500}
          onClick={() => setIsModalOpen(true)}
        />
        {/* Navigation buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded"
        >
          <svg
            className="transition-transform duration-300 ease-in-out transform hover:scale-150"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
            color="#000000"
            fill="none"
          >
            <path
              d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded"
        >
          <svg
            className="transition-transform duration-300 ease-in-out transform hover:scale-150"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
            color="#000000"
            fill="none"
          >
            <path
              d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 hidden md:block">
        <Slider {...settings} ref={sliderRef}>
          {academicData.map((data, index) => (
            <div key={data.id}>
              <div
                onClick={() => handleImageClick(data.image)}
                className={`mx-1 cursor-pointer ${
                  activeSlide === index
                    ? "border-[#003366] border-t-2 border-l-2 border-b-2"
                    : "border-[#003366] border-r-2"
                }`}
              >
                <Image
                  className="object-cover project-image"
                  src={data.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="md:hidden mt-3 flex">
        <div className="flex">
          {academicData.map((data, index) => (
            <div key={data.id}>
              <div
                onClick={() => handleImageClick(data.image)}
                className={`mx-1 cursor-pointer ${
                  activeSlide === index
                    ? "border-[#003366] border-t-2 border-l-2 border-b-2 "
                    : "border-[#003366] border-r-2"
                }`}
              >
                <Image
                  className="object-cover project-image"
                  src={data.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            ref={imgContainerRef}
            className="relative bg-white p-4 rounded-md overflow-hidden img-hover-zoom--quick-zoom"
            onMouseMove={handleMouseMove}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={displayImage}
              alt="Main display"
              width={800}
              height={800}
              className="img-hover-zoom--quick-zoom-img"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white bg-gray-600 rounded-full p-1 hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                color="#000000"
                fill="none"
              >
                <path
                  d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailsCartSlider;
