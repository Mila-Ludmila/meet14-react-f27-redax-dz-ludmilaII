export const randomTheme = () => {
  const themes = ["light", "dark", "winter", "summer"];
  const randomIndex = Math.floor(Math.random() * themes.length);
  return themes[randomIndex];
};
