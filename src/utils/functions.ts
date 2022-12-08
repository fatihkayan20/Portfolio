export const darkThemeClass = "dark-theme";

export const getCurrentTheme = () => {
  return document.body.classList.contains(darkThemeClass) ? "dark" : "light";
};
