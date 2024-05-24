import React from 'react';
import Image1 from '../../assets/img/banner1.png';
import '../styles/Banner.css'
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Satisfy Your Cravings at Agousto Elegante",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae totam eaque. Molestias, nobis veniam! Porro voluptatum, doloribus, recusandae nihil aliquam corrupti quis ullam soluta rerum perspiciatis at aliquid eos.",
  },
];

const Banner = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200 pb-20 ">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-color1 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>

      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        {ImageList.map((item) => (
          <div key={item.id}
          className='mt-28'
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Text content */}
              <div className="left-2 flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                >
                  {item.title}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-lg"
                >
                  {item.description}
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  <button className="bg-gradient-to-r from-color1 to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
              {/* Image */}
              <div className="order-1 sm:order-2">
                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10 animate-updown"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-[300px] h-[300px] sm:h-[550px] sm:w-[550px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
