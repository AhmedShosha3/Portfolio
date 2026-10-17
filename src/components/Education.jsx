import { data, projectById } from "../data/portfolio.js";

export default function Education() {
  const e = data.education;
  const projects = (e.projects || []).map(projectById).filter(Boolean);

  return (
    <section className="block" id="education" aria-labelledby="edu-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="edu-h">Education</h2>
        </div>
        <div className="card edu">
          <div>
            <h3>{e.degree}</h3>
            <p className="meta">
              {e.school}. {e.year}
              {e.gpa ? `. GPA ${e.gpa}` : ""}.
            </p>
          </div>
          {projects.length > 0 && (
            <div>
              <h3 className="edu-sub">Graduation projects</h3>
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
