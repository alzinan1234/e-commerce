import React from "react";

const ItemReview = () => {
  const revies = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 1,
      name: "John Doe",
    },
  ];

  return (
    <div className="mt-5">
      <div className="h-[70vh] overflow-y-auto ">
        {revies?.map((users, index) => (
          <div
            key={index}
            class="p-8 border-[#003366] border-[1px]  my-3 bg-white  shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
          >
            <div class="flex gap-4 items-start">
              <img
                class="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/14.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div class="flex-1 flex justify-between items-start">
                <div>
                  <h6 class="text-lg font-medium text-gray-700">
                    Anjali Sharma
                  </h6>
                  <div className="flex  flex-col">
                    <p class="text-sm text-gray-500">Marketing Professional</p>
                    <p class="text-[11px] textDarkBlue font-bold text-gray-500">
                      20/08/2024
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/p/1234567890"
                  class="text-blue-500 hover:text-blue-600 ml-4"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <p class="mt-8">
              I love the customizable designs! I was able to choose the perfect
              color to match my car's interior. The material feels very durable.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemReview;
