import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsBriefcaseFill, BsCalendarDate } from "react-icons/bs";
import { NavItem } from "../types/NavItem";

export const Qualification = () => {
  return (
    <section
      className="Qualifications section"
      enum-data={NavItem.Qualifications}
    >
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={`qualification__button button__flex }`}>
            <BsBriefcaseFill className="qualification__icon" /> Jobs
          </div>
        </div>

        <div className="qualification__sections">
          <div className={`qualification__content `} data-content>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Electric and Electronic Engineering
                </h3>
                <span className="qualification__subtitle">
                  Burdur Mehmet AKif Ersoy University
                </span>

                <div className="qualification__calendat">
                  <BsCalendarDate /> 2018 - Now
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={`qualification__content `} data-content>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full-Stack Developer</h3>
                <span className="qualification__subtitle">Uzum Technology</span>
                <div className="qualification__calendat">
                  <BsCalendarDate /> 2021 For 3 month
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Mobile Developer</h3>
                <span className="qualification__subtitle">Wannart</span>

                <div className="qualification__calendat">
                  <BsCalendarDate /> 2021 - Now
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
