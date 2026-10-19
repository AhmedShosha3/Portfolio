import { useTranslation } from "react-i18next";
import useData from "../i18n/useData.js";

export default function About() {
  const { t } = useTranslation();
  const data = useData();
  return (
    <section className="block" id="about" aria-labelledby="about-h">
      <div className="wrap about">
        <div>
          <div className="sec-head">
            <h2 id="about-h">{t("about.title")}</h2>
          </div>
          <div className="prose">
            {data.about.map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
          </div>
        </div>
        <div className="facts">
          {data.facts.map((f) => (
            <div className="fact" key={f.title}>
              <b>{f.title}</b>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
