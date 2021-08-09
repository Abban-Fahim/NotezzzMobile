import { useState } from "react";

const darkModeColors = {
  dark: "#1e3d58",
  darkCard: "#3d5b75",
  darkText: "#e8eef1",
  darkTextSecondary: "#b0b3b8",
};

const lightModeColors = {
  light: "#e8eef1",
  lightCard: "#f0f2f5",
  lightText: "#050505",
  lightTextSecondary: "#65676b",
};

const useTheme = () => {
  const [themeState, setThemeState] = useState(
    (theme = {
      ...lightModeColors,
      ...darkModeColors,
      primary: "#43b0f1",
      secondary: "#057dcd",
      transparent: "transparent",
      isDark: true,
    })
  );
  return [themeState, setThemeState];
};

export default useTheme;
