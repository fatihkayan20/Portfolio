/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavItem } from "../types/NavItem";

export const Projects = () => {
  return (
    <section className="section projects" enum-data={NavItem.Projects}>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="portfolio__container container">
        <div>
          <div className="portfolio__content grid">
            <img
              src="https://cdn.discordapp.com/attachments/801953745956241408/850849280847773787/unknown.png"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Twitter Clone App</h3>
              <p className="portfolio__description">
                A full functionality social app like twitter. It made with React
                and Firebase
              </p>

              <a
                href="https://social-app-2ce36.web.app/"
                target="_blank"
                className="button button__flex button__small portfolio__button"
                rel="noreferrer"
              >
                Demo
                <AiOutlineArrowRight className="button__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
