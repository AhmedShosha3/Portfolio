import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { useTranslation } from "react-i18next";

export default function Header({ brand, nav, activeId, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#top">
          {brand}
        </a>
        <button
          className="icon-btn menu-btn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          className={"nav" + (open ? " open" : "")}
          id="nav"
          aria-label="Main"
          onClick={(e) => {
            if (e.target.closest("a")) setOpen(false);
          }}
        >
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              aria-current={activeId === id ? "true" : undefined}
            >
              {t(label)}
            </a>
          ))}
        </nav>
        <button
          className="icon-btn lang-btn"
          type="button"
          lang={i18n.language === "ar" ? "en" : "ar"}
          aria-label={t("lang.aria")}
          onClick={toggleLang}
        >
          {t("lang.short")}
        </button>
        <button
          className="icon-btn"
          type="button"
          aria-label={
            theme === "dark" ? t("header.themeLight") : t("header.themeDark")
          }
          onClick={onToggleTheme}
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} />
        </button>
      </div>
    </header>
  );
}
