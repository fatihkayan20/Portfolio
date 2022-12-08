import React from "react";
import { BiPhone } from "react-icons/bi";
import { SlEnvolope } from "react-icons/sl";
import { GoLocation } from "react-icons/go";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from "emailjs-com";
import { NavItem } from "../types/NavItem";

export const ContactMe = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "",
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID || ""
      )
      .then(
        (result) => {
          console.log(result);
          alert("Message sent, I'll get back to you soon!");
          setState({
            name: "",
            email: "",
            project: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Message failed to send.");
        }
      );
  };
  return (
    <section className="section contact" enum-data={NavItem.ContactMe}>
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <BiPhone className="contact__icon" />

            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+90-541-299-4638</span>
            </div>
          </div>

          <div className="contact__information">
            <SlEnvolope className="contact__icon" />

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">Fatih.kayan83@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <GoLocation className="contact__icon" />

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Turkey - Denizli</span>
            </div>
          </div>
        </div>

        <form className="contact__form grid" onSubmit={handleSubmit}>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__input"
                onChange={handleChange}
              />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__input"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Project
            </label>
            <input
              type="text"
              name="project"
              className="contact__input"
              onChange={handleChange}
            />
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Message
            </label>
            <textarea
              cols={0}
              rows={7}
              name="message"
              className="contact__input"
              onChange={handleChange}
            />
          </div>

          <div>
            <button className="button button__flex" type="submit">
              Send Message
              <AiOutlineSend className="button__icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
