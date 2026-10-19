import { useState } from "react";
import Icon from "./Icon.jsx";
import Badges from "./Badges.jsx";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ project: p }) {
  const { t } = useTranslation();
  const [broken, setBroken] = useState(false);
  const shot = p.screenshots?.[0];
  const href = "#/projects/" + p.id;

  return (
    <article className="card project">
      {shot && !broken ? (
        <div className="visual">
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            onError={() => setBroken(true)}
          />
        </div>
      ) : (
        <div className="visual" role="img" aria-label={p.glyph + " project"}>
          <Icon name={p.glyph} />
        </div>
      )}
      <div className="body">
        <Badges project={p} />
        <h3>
          <a href={href}>{p.title}</a>
        </h3>
        <p className="summary">{p.summary}</p>
        <ul className="chips">
          {p.tags.map((tag) => (
            <li className="chip" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <a
          className="more"
          href={href}
          aria-label={t("card.viewAria", { title: p.title })}
        >
          {t("card.view")}
          <Icon name="arrow" />
        </a>
      </div>
    </article>
  );
}
