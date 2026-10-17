import { data } from "../data/portfolio.js";
import Icon from "./Icon.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Hero() {
  const { person, links } = data;
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <div>
          {person.availability && (
            <p className="availability">{person.availability}</p>
          )}
          <h1 id="hero-title">{person.name}</h1>
          {person.headline && <p className="headline">{person.headline}</p>}
          <p className="intro">{person.intro}</p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">
              View projects
              <Icon name="arrow" />
            </a>
            {links.cv ? (
              <a
                className="btn ghost"
                href={links.cv}
                download="Ahmed-Kamel-CV.pdf"
              >
                <Icon name="download" />
                Download CV
              </a>
            ) : (
              <a className="btn ghost" href="#about">
                About me
              </a>
            )}
          </div>
          <div className="social">
            <SocialLinks />
          </div>
        </div>

        <div
          className="code-card"
          role="img"
          aria-label="Profile summary: Bachelor of Science in Mathematics and Computer Science, Suez University, 2026. Builds with React, Flutter and Python. Models with MATLAB. Teaches LEGO WeDo and electronics. Learning networking and cybersecurity."
        >
          <div className="file" aria-hidden="true">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span>profile.json</span>
          </div>
          <div aria-hidden="true">
            <span className="ln" style={{ "--i": 0 }}>
              {"{"}
            </span>
            <span className="ln" style={{ "--i": 1 }}>
              {"  "}
              <span className="k">"Degree"</span>:{" "}
              <span className="s">"Bachelor of Science"</span>,
            </span>
            <span className="ln" style={{ "--i": 2 }}>
              {"  "}
              <span className="k">"Department"</span>:{" "}
              <span className="s">"Mathematics &amp; Computer Science"</span>,
            </span>
            <span className="ln" style={{ "--i": 3 }}>
              {"  "}
              <span className="k">"University"</span>:{" "}
              <span className="s">"Suez University, 2026"</span>,
            </span>
            <span className="ln" style={{ "--i": 4 }}>
              {"  "}
              <span className="k">"Builds_with"</span>: [
              <span className="s">"React"</span>,{" "}
              <span className="s">"Flutter"</span>,{" "}
              <span className="s">"Python"</span>],
            </span>
            <span className="ln" style={{ "--i": 5 }}>
              {"  "}
              <span className="k">"Models_with"</span>:{" "}
              <span className="s">"MATLAB"</span>,
            </span>
            <span className="ln" style={{ "--i": 6 }}>
              {"  "}
              <span className="k">"Teaches"</span>: [
              <span className="s">"LEGO WeDo"</span>,{" "}
              <span className="s">"Electronics"</span>],
            </span>
            <span className="ln" style={{ "--i": 7 }}>
              {"  "}
              <span className="k">"Learning"</span>: [
              <span className="s">"Networking"</span>,{" "}
              <span className="s">"Cybersecurity"</span>]
            </span>
            <span className="ln" style={{ "--i": 8 }}>
              {"}"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
