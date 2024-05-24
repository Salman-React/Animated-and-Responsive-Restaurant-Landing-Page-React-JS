import React from "react";
import "../styles/Working.css";
import { GrSchedules } from "react-icons/gr";

const Working = () => {
  return (
    <div className="mb-20">
      <div class="container demo-bg">
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <div className="ml-[-140px] hidden sm:flex sm:flex-col">
              <p
                className="text-white text-4xl font-semibold mt-16 flex gap-3"
                data-aos="fade-down"
              >
                <GrSchedules />
                Working Hours
              </p>
              <p
                className="text-white/70 mt-3 text-center text-xl ml-[-250px]"
                data-aos="fade-up"
              >
                Visit us during our flexible opening hours to savor our
                delicious offerings. Our schedule ensures that you can enjoy our
                cuisine at your convenience, whether it's a quick bite during
                lunch or a leisurely dinner.
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="business-hours">
              <h2 class="title" data-aos="fade-down">
                Opening Hours
              </h2>
              <ul class="list-unstyled opening-hours mt-2" data-aos="fade-up">
                <li>
                  Wednesday{" "}
                  <span class="pull-right">ㅤ12:00 PM - 10:00 AM</span>
                </li>
                <li>
                  Thursday{" "}
                  <span class="pull-right">ㅤㅤ12:00 PM - 10:00 AM</span>
                </li>
                <li>
                  Friday{" "}
                  <span class="pull-right">ㅤㅤㅤ 12:00 PM - 10:00 AM</span>
                </li>
                <li>
                  Saturday{" "}
                  <span class="pull-right">ㅤㅤ12:00 PM - 10:00 AM</span>
                </li>
                <li>
                  Sunday
                  <span class="pull-right">ㅤㅤㅤ12:00 PM - 10:00 AM</span>
                </li>
                <li>
                  Monday{" "}
                  <span class="pull-right">ㅤㅤ 12:00 PM - 10:00 AM</span>
                </li>
                <li>
                  Tuesday{" "}
                  <span class="pull-right text-red-500">ㅤㅤㅤㅤㅤClosed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
