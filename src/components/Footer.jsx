import { useTranslation } from "react-i18next";
import useData from "../i18n/useData.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer({ nav }) {
  const { t } = useTranslation();
  const data = useData();
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div>
          <div className="name">{data.person.name}</div>
          <div>{t("footer.tagline")}</div>
        </div>
        <nav aria-label={t("footer.nav")}>
          {nav.map(([id, label]) => (
            <a key={id} href={"#" + id}>
              {t(label)}
            </a>
          ))}
        </nav>
        <div className="social">
          <SocialLinks />
        </div>
        <p className="copy">
          &copy; {new Date().getFullYear()} {data.person.name}
        </p>
      </div>
    </footer>
  );
}
