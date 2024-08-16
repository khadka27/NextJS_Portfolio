"use client";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // Importing sun and moon icons from React Icons

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition duration-300"
    >
      {theme === "dark" ? (
        <FiSun className="h-6 w-6 text-gray-200" />
      ) : (
        <FiMoon className="h-6 w-6 text-black" />
      )}
    </button>
  );
};

export default DarkModeToggle;
