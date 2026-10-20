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
            <span className="ln brace" style={{ "--i": 0 }}>
              {"{"}
            </span>
            <span className="ln" style={{ "--i": 1 }}>
              {"  "}
              <span className="k">"{t("hero.card.kDegree")}"</span>:{" "}
              <span className="s">"{t("hero.card.degree")}"</span>,
            </span>
            <span className="ln" style={{ "--i": 2 }}>
              {"  "}
              <span className="k">"{t("hero.card.kDepartment")}"</span>:{" "}
              <span className="s">"{t("hero.card.department")}"</span>,
            </span>
            <span className="ln" style={{ "--i": 3 }}>
              {"  "}
              <span className="k">"{t("hero.card.kUniversity")}"</span>:{" "}
              <span className="s">"{t("hero.card.university")}"</span>,
            </span>
            <span className="ln" style={{ "--i": 4 }}>
              {"  "}
              <span className="k">"{t("hero.card.kBuilds")}"</span>: [
              <span className="s tech">"React"</span>,{" "}
              <span className="s tech">"Flutter"</span>,{" "}
              <span className="s tech">"Python"</span>],
            </span>
            <span className="ln" style={{ "--i": 5 }}>
              {"  "}
              <span className="k">"{t("hero.card.kModels")}"</span>:{" "}
              <span className="s tech">"MATLAB"</span>,
            </span>
            <span className="ln" style={{ "--i": 6 }}>
              {"  "}
              <span className="k">"{t("hero.card.kTeaches")}"</span>: [
              <span className="s tech">"LEGO WeDo"</span>,{" "}
              <span className="s">"{t("hero.card.electronics")}"</span>],
            </span>
            <span className="ln" style={{ "--i": 7 }}>
              {"  "}
              <span className="k">"{t("hero.card.kLearning")}"</span>: [
              <span className="s">"{t("hero.card.networking")}"</span>,{" "}
              <span className="s">"{t("hero.card.cyber")}"</span>]
            </span>
            <span className="ln brace" style={{ "--i": 8 }}>
              {"}"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
