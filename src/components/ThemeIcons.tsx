import * as React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { darkThemeClass, getCurrentTheme } from "../utils/functions";

export const ThemeIcons: React.FC = () => {
  const [activeTheme, setActiveTheme] = React.useState("light");

  const toggleTheme = () => {
    document.body.classList.toggle(darkThemeClass);
    const theme = getCurrentTheme();
    localStorage.setItem("selected-theme", theme);
    setActiveTheme(theme);
  };

  return (
    <>
      {activeTheme === "dark" ? (
        <BsMoon
          className="change-theme"
          id="theme-button"
          onClick={toggleTheme}
        />
      ) : (
        <BsSun
          className="change-theme"
          id="theme-button"
          onClick={toggleTheme}
        />
      )}
    </>
  );
};
