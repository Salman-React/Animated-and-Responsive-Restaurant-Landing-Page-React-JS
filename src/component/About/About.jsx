import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image1 from '../../assets/img/about1.png';
import Image2 from '../../assets/img/about2.png';

const About = () => {
  return (
    <div className='bg-[#F5F5F5]'>
      <section class="about-section pt-28 pb-14 pl-0 sm:pl-52">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              {/* <!--=== About Content Box ===--> */}
              <div class="about-content-box content-box-gap mb-40">
                <div class="section-title section-title-left mb-30">
                  <p
                    data-aos="fade-down"
                    className="text-color1 text-5xl font-semibold"
                  >
                    About Agousto Elegante
                  </p>
                  
                </div>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  non maiores quia corporis dolorum! Voluptates rem a accusamus,
                  consectetur laudantium eius labore amet, maxime animi
                  perspiciatis exercitationem quod quia molestias, officiis
                  consequuntur beatae.
                </p>
                <div className="flex justify-center">
            <button className="flex flex-row items-center justify-center gap-2 text-xl text-center mt-10 cursor-pointer h-12 bg-color1 text-white py-1 px-5 rounded-md">
            Learn More <FaArrowRightLong />
            </button>
          </div>
              </div>
            </div>
            <div class="col-lg-7">
              {/* <!--=== About Content Box ===--> */}
              <div class="hidden sm:flex">
                <div class="flex ml-0 sm:ml-32">
                    <img
                      data-aos="fade-left"
                      src={Image1}
                      class="mb-40"
                      alt="About Image"
                    />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
