export const darkThemeClass = "dark-theme";

export const getCurrentTheme = () => {
  return document.body.classList.contains(darkThemeClass) ? "dark" : "light";
};

export const getExperienceYears = (startDate: string) => {
  const start = new Date(startDate);
  const end = new Date();
  return Math.round((end.getTime() - start.getTime()) / 31536000000);
};
