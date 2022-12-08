import React from "react";
import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ScrollUp = () => {
  const navScroll = React.useCallback((scrollY: number) => {
    const nav = document.getElementById("header");
    if (scrollY >= 80) nav?.classList?.add("scroll-header");
    else nav?.classList?.remove("scroll-header");
  }, []);

  const scrollUp = React.useCallback((scrollY: number) => {
    const scrollUp = document.getElementById("scroll-up");
    if (scrollY >= 560 && !scrollUp?.classList?.contains("show-scroll")) {
      scrollUp?.classList?.add("show-scroll");
    } else if (scrollY <= 560 && scrollUp?.classList?.contains("show-scroll")) {
      scrollUp?.classList?.remove("show-scroll");
    }
  }, []);

  const handleScroll = React.useCallback(() => {
    const scrollY = window.pageYOffset;
    navScroll(scrollY);
    scrollUp(scrollY);
  }, [navScroll, scrollUp]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Link to="home" className="scrollup" id="scroll-up">
      <AiOutlineArrowUp className="scrollup__icon" />
    </Link>
  );
};
