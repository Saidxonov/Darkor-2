import { useState, useEffect } from "react";

function LightAndDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") == "dark";
  });

  useEffect(
    function () {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
    [darkMode]
  );

  function toggleDarkLightMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className="darkAndLight dark:bg-black">
        <div className="text-center">
          <h2 className="pt-[50px] mt-2 text-2xl font-semibold text-black dark:text-white">
            5.masala
          </h2>
          <h1 className="mt-5 text-4xl font-bold text-black dark:text-white">
            Light/Dark Mode va Reusable Layout
          </h1>
        </div>
        <div className="dark-light-mode-content">
          <h1 className="mt-16 text-center text-7xl dark:text-white">
            Bu Dinamik O'zgaradigan Text
          </h1>
        </div>
        <button
          onClick={toggleDarkLightMode}
          className="mt-[100px] ml-[350px] mb-[400px] text-3xl dark:text-white"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
}

export default LightAndDarkMode;
