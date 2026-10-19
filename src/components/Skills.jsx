import { useTranslation } from "react-i18next";
import useData from "../i18n/useData.js";

export default function Skills() {
  const { t } = useTranslation();
  const data = useData();
  return (
    <section className="block" id="skills" aria-labelledby="skills-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="skills-h">{t("skills.title")}</h2>
          <p className="lede">{t("skills.lede")}</p>
        </div>
        <div className="grid skills">
          {data.skills.map((s) => (
            <article className="card skill-card" key={s.group}>
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((i) => (
                  <li className="chip" key={i}>
                    {i}
                  </li>
                ))}
              </ul>
              <p className="evidence">{s.evidence}</p>
            </article>
          ))}
        </div>
        <p className="note">{t("skills.note")}</p>
      </div>
    </section>
  );
}
