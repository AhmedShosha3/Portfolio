import { data } from "../data/portfolio.js";

export default function Experience() {
  return (
    <section className="block" id="experience" aria-labelledby="exp-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="exp-h">Experience</h2>
          <p className="lede">One teaching role and three training programs.</p>
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
