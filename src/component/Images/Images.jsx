import React from "react";
import img1 from "../../assets/img/fd0.jpg";
import img2 from "../../assets/img/fd1.jpg";
import img3 from "../../assets/img/fd3.jpg";
import img4 from "../../assets/img/fd4.jpg";
import img5 from "../../assets/img/fd5.jpg";
import img6 from "../../assets/img/fd6.jpg";
import '../styles/Images.css'

const images = [
  {
    id: 1,
    img: img1,
    aosDelay: "100",
  },
  {
    id: 2,
    img: img2,
    aosDelay: "100",
  },
  {
    id: 3,
    img: img3,
    aosDelay: "100",
  },
  {
    id: 4,
    img: img4,
    aosDelay: "100",
  },
  {
    id: 5,
    img: img5,
    aosDelay: "100",
  },
  {
    id: 6,
    img: img6,
    aosDelay: "100",
  },
  
];
const Images = () => {
  return (
    <div>
      <section class="instagram-gallery pt-130 pb-100 mt-10">
        <div class="container-fluid">
          <div class="row">
            {images.map((data) => (
              <div
                class="col-xl-2 col-lg-3 col-md-4 col-sm-4 mt-2 mb-2"
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                <div class="instagram-box mb-30">
                  <div class="instagram-img">
                    <img 
                    className=''
                    src={data.img} alt="Instagram Image" />
                    <div class="insta-overlay"></div>
                    <a
                      href="#"
                      class="img-popup insta-icon"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Images;
