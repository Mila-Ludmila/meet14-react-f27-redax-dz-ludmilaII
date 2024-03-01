// action - об'єкт з одним обов'язковим полем "type", & "payload" - необов'язкове, дані для роботи зі state

export const themeState = {
  theme: "light",
};

export const reducerTheme = (state = themeState, action) => {
  switch (action.type) {
    case 'setTheme':
      return {...state, theme: action.payload};

      case 'saveTheme':
        localStorage.setItem('theme', action.payload);
        return state

      default:
        return state;
  }
};
