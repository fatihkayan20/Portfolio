import React from "react";
import { Link } from "react-scroll";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { NavItem } from "../types/NavItem";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Fatih Kayan</h1>
            <span className="footer__subtitle">
              Frontend & Mobile Developer
            </span>
          </div>

          <ul className="footer__links">
            <li>
              <Link to={NavItem.Projects} className="footer__link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" className="footer__link">
                {NavItem.ContactMe}
              </Link>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/fatihkayan/"
              target="_blank"
              className="footer__social"
              rel="noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://www.instagram.com/fatihkayann20/"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://github.com/fatihkayan20"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <AiOutlineGithub />
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; Fatih Kayan. All right reserved. </p>
      </div>
    </footer>
  );
};
