import "./App.css";
import Todo from "./Components/todo/index.jsx";
import { Route, Routes, NavLink, Form } from "react-router-dom";
import Logo from "./images/header-logo.svg";
import Arrow from "./images/arrow.svg";
import Form2 from "./Components/form/index.jsx";
import API from "./Components/API/index.jsx";
import Counter from "./Components/Counter/index.jsx";
import LightAndDarkMode from "./Components/Light Dark Mode/index.jsx";

function App() {
  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            <div className="head">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="links">
                <ul>
                  <li>
                    <NavLink to="/">ToDo</NavLink>
                  </li>
                  <li>
                    <NavLink to="/form">Form</NavLink>
                  </li>
                  <li>
                    <NavLink to="/api">API</NavLink>
                  </li>
                  <li>
                    <NavLink to="/counter">Counter</NavLink>
                  </li>
                  <li>
                    <NavLink to="/light_dark_mode">Light/Dark</NavLink>
                  </li>
                </ul>
              </div>
              <div className="contact">
                <div className="lang">
                  <p>O’zb</p>
                  <img className="arrow" src={Arrow} alt="" />
                </div>
                <div className="button">
                  <button>Boshlash</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Todo></Todo>}></Route>
        <Route path="/form" element={<Form2></Form2>}></Route>
        <Route path="/api" element={<API></API>}></Route>
        <Route path="/counter" element={<Counter></Counter>}></Route>
        <Route
          path="/light_dark_mode"
          element={<LightAndDarkMode></LightAndDarkMode>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
