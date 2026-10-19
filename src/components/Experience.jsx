import { useTranslation } from "react-i18next";
import useData from "../i18n/useData.js";

export default function Experience() {
  const { t } = useTranslation();
  const data = useData();

  return (
    <section className="block" id="experience" aria-labelledby="exp-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="exp-h">{t("exp.title")}</h2>
          <p className="lede">{t("exp.lede")}</p>
        </div>
        <ol className="timeline">
          {data.experience.map((x) => (
            <li key={x.role + x.when}>
              <div className="card">
                <div className="when">{x.when}</div>
                <h3>{x.role}</h3>
                <div className="org">{x.org}</div>
                {x.desc && <p className="desc">{x.desc}</p>}
                {x.proof && <p className="proof">{x.proof}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
