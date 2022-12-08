/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { IProject } from "../types/IProject";
import { NavItem } from "../types/NavItem";
import { getProjects } from "../utils/supabase/getProjects";

export const Projects = () => {
  const [projects, setProjects] = React.useState<IProject[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePrev = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);
  };

  const handleNext = () => {
    setCurrentSlide(
      currentSlide < projects.length - 1 ? currentSlide + 1 : currentSlide
    );
  };

  return (
    <section className="section projects" enum-data={NavItem.Projects}>
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="portfolio__container container grid">
        <AiOutlineArrowLeft
          className="slide__button  slide__left"
          onClick={handlePrev}
        />
        <AiOutlineArrowRight
          className="slide__button slide__right"
          onClick={handleNext}
        />

        {projects.map((project) => (
          <div
            className="portfolio__content"
            key={project.id}
            style={{
              transform: `translateX(calc(-${currentSlide * 100}% - ${
                currentSlide * 1.5
              }rem) )`,
            }}
          >
            <img src={project.imageUrl} alt="" className="portfolio__img" />

            <div className="portfolio__data">
              <h3 className="portfolio__title">{project.title}</h3>
              <p className="portfolio__description">{project.description}</p>

              <div className="portfolio__buttons">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    className="button button__flex button__small portfolio__button"
                    rel="noreferrer"
                  >
                    Source Code
                    <AiOutlineArrowRight className="button__icon" />
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="button button__flex button__small portfolio__button"
                    rel="noreferrer"
                  >
                    Demo
                    <AiOutlineArrowRight className="button__icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
