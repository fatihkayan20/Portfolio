/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { NavItem } from "../types/NavItem";

export const About = () => {
  return (
    <section className="about section" enum-data={NavItem.About}>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img
          src="https://avatars.githubusercontent.com/u/62346582?v=4"
          alt=""
          className="about__img"
        />
        <div className="about__data">
          <p className="about__description">
            Web & Mobile developer, with extensive knowledge and years of
            experience, working in web and mobile technologies, delivering
            quality work.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> project
              </span>
            </div>
            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a
              // href={TurkishResume}
              download="Turkish_Resume.pdf"
              className="button button__flex"
            >
              Turkish Resume
              <AiOutlineDownload className="download__icon" />
            </a>
            <a
              // href={EnglishResume}
              download="English_resume.pdf"
              className="button button__flex"
            >
              English Resume
              <AiOutlineDownload className="download__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
