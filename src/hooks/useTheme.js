import { useEffect, useState } from "react";

function readSaved() {
  try {
    const t = localStorage.getItem("theme");
    return t === "light" || t === "dark" ? t : "dark";
  } catch {
    return "dark";
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(readSaved);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0b1220" : "#f5f7fb");
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return [theme, toggle];
}
