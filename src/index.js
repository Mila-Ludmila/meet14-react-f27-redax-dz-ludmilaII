import { createRoot } from "react-dom/client";
import "./styles.css";
import Main from "./components/Main/Main.jsx";
import { Provider } from "react-redux";
import { store } from "./share/store.js";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
