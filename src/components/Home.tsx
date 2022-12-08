/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiMouse } from "react-icons/bi";
import { AiOutlineSend, AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";
import { NavItem } from "../types/NavItem";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMedium,
} from "react-icons/ai";
import { getSocialLinks } from "../utils/supabase/getSocialLinks";
import { ISocialLink } from "../types/ISocialLink";
import { SocialLinkType } from "../types/SocialLinkType";

export const Home = () => {
  const [links, setLinks] = React.useState<ISocialLink[]>([]);

  React.useEffect(() => {
    getSocialLinks()
      .then((data) => {
        setLinks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getLinkIcon = (type: SocialLinkType) => {
    const icons = {
      [SocialLinkType.Github]: <AiOutlineGithub />,
      [SocialLinkType.Instagram]: <AiOutlineInstagram />,
      [SocialLinkType.Linkedin]: <AiOutlineLinkedin />,
      [SocialLinkType.Medium]: <AiOutlineMedium />,
    };

    return icons[type];
  };

  return (
    <section className="home section" enum-data={NavItem.Home}>
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {links.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="home__social-icon"
              >
                {getLinkIcon(item.type)}
              </a>
            ))}
          </div>

          <div className="home__img">
            <img
              className="home__img-img"
              src="https://avatars.githubusercontent.com/u/62346582?v=4"
              alt=""
            />
          </div>

          <div className="home__data">
            <h1 className="home__title">{`Hi, I'am Fatih`}</h1>
            <h3 className="home__subtitle">Frontend & Mobile Developer</h3>
            <p className="home__description">
              High level experience in web and mobile design and development
              knowledge, producing quality work.
            </p>
            <Link to="contact" spy={true} className="button button__flex">
              Contact Me <AiOutlineSend className="button__icon" />
            </Link>
          </div>
        </div>

        <div className="home__scroll">
          <Link to="about" className="home__scroll-button button__flex">
            <BiMouse className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll Down</span>
            <AiOutlineArrowDown className="home__scroll-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};
