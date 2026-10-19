import SocialLinks from "./SocialLinks.jsx";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className="block" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <h2 id="contact-h">{t("contact.title")}</h2>
        <p className="lede">{t("contact.lede")}</p>
        <div className="contact-links">
          <SocialLinks labelled />
        </div>
      </div>
    </section>
  );
}
