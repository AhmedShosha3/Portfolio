import { useTranslation } from "react-i18next";
import useData from "../i18n/useData.js";
import Icon from "./Icon.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Hero() {
  const { t } = useTranslation();
  const data = useData();
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
              {t("hero.projects")}
              <Icon name="arrow" />
            </a>
            {links.cv ? (
              <a
                className="btn ghost"
                href={links.cv}
                download="Ahmed-Kamel-CV.pdf"
              >
                <Icon name="download" />
                {t("hero.cv")}
              </a>
            ) : (
              <a className="btn ghost" href="#about">
                {t("hero.about")}
              </a>
            )}
          </div>
          <div className="social">
            <SocialLinks />
          </div>
        </div>

        <div className="code-card" role="img" aria-label={t("hero.profile")}>
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
              <span className="s">"Mathematics & Computer Science"</span>,
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
