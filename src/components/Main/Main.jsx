import { useSelector } from "react-redux";
import Header from "../Header/Header";


const themeContent = {
  light: {
    content: <h1>Це світла тема</h1>,
  },
  dark: {
    content: <h1>Це темна тема</h1>,
  },
  summer: {
    content: <h1>Це тема літа </h1>,
  },
  winter: {
    content: <h1>Це тема зими</h1>,
  },
};

export default function Main() {
  const theme = useSelector((state) => state.theme.theme);
  const content = themeContent[theme];
  return (
    <>
      <Header />
      <div className="container my-5">
      {content.content}</div>
    </>
  );
}
