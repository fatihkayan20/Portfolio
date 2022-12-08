import * as React from "react";
import { Link } from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlinePicture,
  AiOutlineSend,
  AiOutlineAppstore,
  AiOutlineClose,
} from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { NavItem } from "../types/NavItem";
import { darkThemeClass, getCurrentTheme } from "../utils/functions";
import { ThemeIcons } from "./ThemeIcons";

const navItems = [
  {
    name: NavItem.Home,
    icon: <AiOutlineHome />,
    link: "home",
  },
  {
    name: NavItem.About,
    icon: <AiOutlineUser />,
    link: "about",
  },
  {
    name: NavItem.Skills,
    icon: <AiOutlineAppstore />,
    link: "skills",
  },
  {
    name: NavItem.Qualifications,
    icon: <AiOutlineBook />,
    link: "Qualifications",
  },
  {
    name: NavItem.Projects,
    icon: <AiOutlinePicture />,
    link: "projects",
  },
  {
    name: NavItem.ContactMe,
    icon: <AiOutlineSend />,
    link: "contact",
  },
];

export const Header: React.FC = () => {
  const [state, setState] = React.useState({
    isBottomNavOpen: false,
    active: NavItem.Home,
  });

  const handleScroll = React.useCallback(() => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        let enumData = current.getAttribute("enum-data") as NavItem;
        state.active != enumData && setState({ ...state, active: enumData });
      }
    });
  }, [state]);

  React.useEffect(() => {
    function getTheme() {
      const selectedTheme = localStorage.getItem("selected-theme");
      const theme = getCurrentTheme();
      setState((prev) => ({
        ...prev,
        theme: theme,
      }));

      if (selectedTheme) {
        document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
          darkThemeClass
        );
      }
    }

    getTheme();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleToggleBottomNav = () => {
    setState({
      ...state,
      isBottomNavOpen: !state.isBottomNavOpen,
    });
  };

  const handleMenuLinkClick = (value: NavItem) => {
    setState({
      ...state,
      isBottomNavOpen: false,
      active: value,
    });
  };

  const getNavLinkClass = (value: NavItem) => {
    return state.active === value ? "active-link" : "";
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="nav__logo">Fatih</div>

        <div
          className={`nav__menu ${state.isBottomNavOpen ? "show-menu" : ""}`}
        >
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li key={item.name} className={`nav__item `}>
                <Link
                  to={item.link}
                  className={`nav__link ${getNavLinkClass(item.name)}`}
                  spy={true}
                  onClick={() => handleMenuLinkClick(item.name)}
                >
                  <i className="nav__icon">{item.icon}</i>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <AiOutlineClose
            className="nav__close"
            onClick={handleToggleBottomNav}
          />
        </div>

        <div className="nav__btns">
          <ThemeIcons />

          <AiOutlineAppstore
            className="nav__toggle"
            onClick={handleToggleBottomNav}
          />
        </div>
      </nav>
    </header>
  );
};
