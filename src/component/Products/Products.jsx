import React from "react";
import Img1 from "../../assets/img/food3.png";
import Img2 from "../../assets/img/food4.png";
import Img3 from "../../assets/img/food2.png";
import Img4 from "../../assets/img/food5.png";
import Img5 from "../../assets/img/food1.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Pizza",
    rating: "10/10",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Wraps",
    rating: "10/10",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Steaks",
    rating: "10/10",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Pasta",
    rating: "10/10",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Burgers",
    rating: "10/10",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-lg text-color1 my-2">
            Our Popular Food
          </p>
          <h1 data-aos="fade-up" className="text-5xl font-bold">
            Best Category Foods Menu
          </h1>
          <br />
          <p data-aos="fade-up" className="text-lg text-gray-400">
            Discover the finest culinary delights - gourmet dishes, unparalleled
            flavors.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 cursor-pointer hover:bg-black/80 hover:text-white 
                 rounded-lg"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[220px] object-cover rounded-md"
                />
                <div className="flex flex-col justify-center items-center hover:text-white">
                  <div className="">
                    <h3 className="font-semibold text-[#B8860B]">{data.title}</h3>
                  </div>

                  <div className="flex items-center gap-1 justify-center">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-color1 text-white py-1 px-5 rounded-md">
              View All
            </button>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
              {/* <!--=== Quote Box ===--> */}
              <div class="quote-box text-center text-black mt-3">
                <p>
                  Need any Special Food or Any Birthday Cakes?{" "}
                  <a href="#"
                  className='text-color1'
                  >Order Now</a>
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
