import { data } from "../data/portfolio.js";

export default function About() {
  return (
    <section className="block" id="about" aria-labelledby="about-h">
      <div className="wrap about">
        <div>
          <div className="sec-head">
            <h2 id="about-h">About me</h2>
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
