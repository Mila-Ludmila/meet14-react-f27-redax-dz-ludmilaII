import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  image: "images_light",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      document.body.classList.remove(state.theme);
      document.body.classList.add(action.payload);
      return {
        ...state,
        theme: action.payload,
      };
    },
    saveTheme: (state, action) => {
      const theme = action.payload;
      localStorage.setItem("theme", theme);
      state.theme = theme;
    },
    lightTheme: (state) => {
      return { ...state, theme: "light" };
    },
    darkTheme: (state) => {
      return { ...state, theme: "dark" };
    },
    winterTheme: (state) => {
      state.theme = "winter";
    },
    summerTheme: (state) => {
      state.theme = "summer";
    },
    setTime: (state) => {
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const time = hours + minutes / 60;
      const theme = time >= 8 && time < 17 ? "light" : "dark";
      state.theme = theme;
    },
    setTimeTheme: (state) => {
      const hours = new Date().getHours();
      const theme = hours >= 8 && hours < 17 ? "light" : "dark";
      document.body.classList.remove(state.theme);
      document.body.classList.add(theme);
      return {
        ...state,
        theme: theme,
      };
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const {
  setTheme,
  saveTheme,
  lightTheme,
  darkTheme,
  winterTheme,
  summerTheme,
  setTime,
  setTimeTheme,
  setImage,
} = themeSlice.actions;

export default themeSlice.reducer;
