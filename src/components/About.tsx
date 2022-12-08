/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { IResume } from "../types/IResume";
import { NavItem } from "../types/NavItem";
import { startDateOfExperience } from "../utils/dates";
import { getExperienceYears } from "../utils/functions";
import { getResumes } from "../utils/supabase/getResumes";

export const About = () => {
  const [resumes, setResumes] = React.useState<IResume[]>([]);

  React.useEffect(() => {
    getResumes()
      .then((data) => {
        setResumes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getDownloadText = (version: IResume["version"]) => {
    const texts = {
      ["EN"]: "FatihKayan_Resume_EN.pdf",
      ["TR"]: "FatihKayan_Resume_TR.pdf",
    };

    return texts[version];
  };

  const getButtonText = (version: IResume["version"]) => {
    const texts = {
      ["EN"]: "Download Resume (EN)",
      ["TR"]: "Download Resume (TR)",
    };

    return texts[version];
  };

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
              <span className="about__info-title">
                {getExperienceYears(startDateOfExperience)}+
              </span>
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
            {resumes.map((item) => (
              <a
                key={item.id}
                href={item.url}
                download={getDownloadText(item.version)}
                className="button button__flex"
              >
                {getButtonText(item.version)}
                <AiOutlineDownload className="download__icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
