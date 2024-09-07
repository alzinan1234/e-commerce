/* eslint-disable react/jsx-key */
import React from "react";
import Link from "next/link";
import Banner from "@/components/Client/Home/Banner/Banner";
import Cart from "@/components/Client/Cart/Cart";
import image from "@/assets/cart/main.webp";
import image2 from "@/assets/cart/main2.webp";
import Category from "@/components/Client/Home/CategorySlider/Category";

const Home = () => {
  const allItems = [
    {
      title: "Mountain View",
      description:
        "Check out all of these gorgeous mountain trips with beautiful views of the mountains",
      buttonText: "View Trips",
      image: [image, image2],
    },
    {
      title: "To The Beach",
      description: "Plan your next beach trip with these fabulous destinations",
      buttonText: "View Trips",
      image: [image, image2],
    },
    {
      title: "Desert Destinations",
      description: "It’s the desert you’ve always dreamed of",
      buttonText: "Book Now",
      image: [image, image2],
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      buttonText: "Book Now",
      image: [image, image2],
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      buttonText: "Book Now",
      image: [image, image2],
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      buttonText: "Book Now",
      image: [image, image2],
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      buttonText: "Book Now",
      image: [image, image2],
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      buttonText: "Book Now",
      image: [image, image2],
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      buttonText: "Book Now",
      image: [image, image2],
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      buttonText: "Book Now",
      image: [image, image2],
    },
  ];

  return (
    <div className="">
      <Banner />
      {/* ---------category base product-------- */}

      <div className="pt-4">
        <Category />
      </div>

      <div className="maxWidth mx-auto ">
        {/* ----------- category base Item ------- */}

        <div className=" flex flex-col py-6 pt-11 relative">
          <h1 className="text-[22px] font-bold text-gray-600 uppercase">
            {" "}
            All Collections
          </h1>
          <div class="w-[120px] h-[4px] BgDarkBlue"></div>
        </div>
        <div className="sm-card-padding grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 overflow-hidden relative">
          <Cart allItems={allItems} />
        </div>
      </div>
    </div>
  );
};

export default Home;
