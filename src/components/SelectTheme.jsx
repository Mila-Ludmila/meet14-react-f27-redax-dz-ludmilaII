import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import {
  setTheme,
  saveTheme,
  setTime,
  setTimeTheme,
  lightTheme,
  darkTheme,
} from "../share/reducers/theme.reducer";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { TbArrowsRandom } from "react-icons/tb";
import { IconContext } from "react-icons";
import { randomTheme } from "../share/random";

const SelectTheme = () => {
  const dispatch = useDispatch();

  const [theme, setThemeLocal] = useState("light");

  const handleChange = () => () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setThemeLocal(newTheme);
    dispatch(setTheme(newTheme));
    dispatch(saveTheme(newTheme));

    const newTimeTheme = newTheme === "dark" ? darkTheme : lightTheme;
    dispatch(newTimeTheme());
  };

  const randomChange = () => {
    const newRandom = randomTheme();
    setThemeLocal(newRandom);
    dispatch(setTheme(newRandom));
    dispatch(saveTheme(newRandom));
  };

  useEffect(() => {
    dispatch(setTime());
    dispatch(setTimeTheme());
  }, [dispatch]);

  useEffect(() => {
    const body = document.body;
    const currentTheme = body.getAttribute("theme");
    body.classList.remove(currentTheme);
    body.setAttribute("theme", theme);
    body.classList.add(theme);
  }, [theme]);

  return (
    <div className="d-flex justify-content-between p-3">
      <div className=" ">
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label={
              theme === "dark" ? (
                <IconContext.Provider
                  value={{ color: "black", className: "global-class-name" }}
                >
                  <div>
                    <FaRegLightbulb />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider
                  value={{ color: "orangered", className: "global-class-name" }}
                >
                  <div>
                    <FaLightbulb />
                  </div>
                </IconContext.Provider>
              )
            }
            onClick={handleChange()}
          />
        </Form>
      </div>

      <div className=" ">
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label={
              <IconContext.Provider
                value={{ color: "yellowgreen", className: "global-class-name" }}
              >
                <div>
                  <TbArrowsRandom />
                </div>
              </IconContext.Provider>
            }
            onClick={randomChange}
          />
        </Form>
      </div>
    </div>
  );
};

export default SelectTheme;
