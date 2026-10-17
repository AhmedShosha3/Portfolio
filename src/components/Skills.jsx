import { data } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section className="block" id="skills" aria-labelledby="skills-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="skills-h">Skills</h2>
          <p className="lede">
            Each group names the project, training or course that backs it up. I
            don't rate myself with percentages.
          </p>
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
        <p className="note">
          Networking and security are at a learning stage: university
          coursework, one 20-hour course and several short online courses. I
          have no professional security-operations experience.
        </p>
      </div>
    </section>
  );
}
