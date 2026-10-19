import { useState } from "react";
import { useTranslation } from "react-i18next";
import useData from "../i18n/useData.js";
import FilterBar from "./FilterBar.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const { t } = useTranslation();
  const data = useData();
  const [filter, setFilter] = useState("all");
  const list = data.projects.filter(
    (p) => filter === "all" || p.cat === filter,
  );

  return (
    <section className="block" id="projects" aria-labelledby="projects-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="projects-h">{t("projects.title")}</h2>
          <p className="lede">{t("projects.lede")}</p>
        </div>
        <FilterBar
          options={data.projectFilters}
          value={filter}
          onChange={setFilter}
          label={t("projects.filter")}
        />
        <div className="grid projects" aria-live="polite">
          {list.length ? (
            list.map((p) => <ProjectCard key={p.id} project={p} />)
          ) : (
            <div className="empty">{t("projects.empty")}</div>
          )}
        </div>
      </div>
    </section>
  );
}
