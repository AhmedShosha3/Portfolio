import { useTranslation } from "react-i18next";
import useData from "../i18n/useData.js";

export default function Education() {
  const { t } = useTranslation();
  const data = useData();
  const e = data.education;
  const projects = (e.projects || [])
    .map((id) => data.projects.find((x) => x.id === id))
    .filter(Boolean);

  return (
    <section className="block" id="education" aria-labelledby="edu-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="edu-h">{t("edu.title")}</h2>
        </div>
        <div className="card edu">
          <div>
            <h3>{e.degree}</h3>
            <p className="meta">
              {e.school}. {e.year}
              {e.gpa ? `. ${t("edu.gpa")} ${e.gpa}` : ""}.
            </p>
          </div>
          {projects.length > 0 && (
            <div>
              <h3 className="edu-sub">{t("edu.projects")}</h3>
              <div className="links">
                {projects.map((p) => (
                  <a key={p.id} href={"#/projects/" + p.id}>
                    {p.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
