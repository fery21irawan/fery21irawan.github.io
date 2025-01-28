import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <label className="swap swap-flip">
      <input type="checkbox" onChange={toggleTheme} />
      <div className="swap-on">
        <CiDark className="w-6 h-6" />
      </div>
      <div className="swap-off">
        <CiLight className="w-6 h-6" />
      </div>
    </label>
  );
}

export default ThemeToggle;
