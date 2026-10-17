import { useState } from "react";
import { data } from "../data/portfolio.js";
import FilterBar from "./FilterBar.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const list = data.projects.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section className="block" id="projects" aria-labelledby="projects-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="projects-h">Projects</h2>
          <p className="lede">
            Academic and graduation work. Each project page states what I built
            myself and what belongs to a team.
          </p>
        </div>
        <FilterBar
          options={data.projectFilters}
          value={filter}
          onChange={setFilter}
          label="Filter projects by type"
        />
        <div className="grid projects" aria-live="polite">
          {list.length ? (
            list.map((p) => <ProjectCard key={p.id} project={p} />)
          ) : (
            <div className="empty">
              No projects in this category yet. Choose All to see every project.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
