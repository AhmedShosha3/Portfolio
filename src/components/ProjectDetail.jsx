import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import Badges from "./Badges.jsx";
import Lightbox from "./Lightbox.jsx";
import ProjectLinks from "./ProjectLinks.jsx";
import { useTranslation } from "react-i18next";

function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function List({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

function StackGroup({ group, mine }) {
  return (
    <div className={"stack-group" + (mine ? " mine" : "")}>
      {group.label && <h3>{group.label}</h3>}
      <ul className="chips">
        {group.items.map((i) => (
          <li className="chip" key={i}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DemoVideo({ src, title }) {
  const { t } = useTranslation();
  const [broken, setBroken] = useState(false);

  if (broken) return null;
  return (
    <video
      className="demo-video"
      controls
      controlsList="nodownload noplaybackrate"
      disablePictureInPicture
      disableRemotePlayback
      muted
      playsInline
      preload="metadata"
      aria-label={t("detail.videoAria", { title })}
      onError={() => {
        console.warn(t("detail.noVideo"), src);
        setBroken(true);
      }}
    >
      <source src={src} type="video/mp4" />
      {t("detail.noVideo")}
    </video>
  );
}

function Shot({ shot, onOpen }) {
  const { t } = useTranslation();
  const [broken, setBroken] = useState(false);

  if (broken) return null;
  return (
    <figure className="shot">
      <button
        className="shot-btn"
        type="button"
        aria-label={t("detail.enlarge", { name: shot.caption || shot.alt })}
        onClick={onOpen}
      >
        <img
          src={shot.src}
          alt={shot.alt}
          loading="lazy"
          onError={() => {
            console.warn("Screenshot not found:", shot.src);
            setBroken(true);
          }}
        />
      </button>
      {shot.caption && <figcaption>{shot.caption}</figcaption>}
    </figure>
  );
}

export default function ProjectDetail({ project: p }) {
  const h1 = useRef(null);
  const opener = useRef(null);
  const [viewer, setViewer] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    h1.current?.focus({ preventScroll: true });
    setViewer(null);
  }, [p.id]);

  return (
    <>
      <div className="wrap detail-head">
        <a className="back" href="#projects">
          <Icon name="back" />
          {t("detail.all")}
        </a>
        <Badges project={p} />
        <h1 ref={h1} id="detail-title" tabIndex={-1}>
          {p.title}
        </h1>
        <p className="lede">{p.summary}</p>
        <ProjectLinks links={p.links} />
      </div>

      <div className="wrap detail-grid">
        <div className="detail-main">
          {p.overview && (
            <Section title={t("detail.overview")}>
              {p.overview.map((text) => (
                <p key={text.slice(0, 40)}>{text}</p>
              ))}
            </Section>
          )}
          {p.problem && (
            <Section title={t("detail.problem")}>
              <p>{p.problem.intro}</p>
              <List items={p.problem.list} />
            </Section>
          )}
          {p.features && (
            <Section
              title={p.cat === "math" ? t("detail.math") : t("detail.features")}
            >
              <List items={p.features} />
            </Section>
          )}
          {p.video && (
            <Section title={t("detail.demo")}>
              <DemoVideo src={p.video} title={p.title} />
            </Section>
          )}
          {p.contribution && (
            <Section title={t("detail.contribution")}>
              <List items={p.contribution} />
            </Section>
          )}
          {p.samples && (
            <Section title={t("detail.samples")}>
              {p.samplesNote && <p className="muted-note">{p.samplesNote}</p>}
              {p.samples.map((s) => (
                <div className="sample-block" key={s.title}>
                  <h3 className="sample-title">{s.title}</h3>
                  <pre
                    className="sample"
                    tabIndex={0}
                    aria-label={t("detail.sampleAria", { title: s.title })}
                  >
                    <code>{s.text}</code>
                  </pre>
                </div>
              ))}
            </Section>
          )}
          {p.results && (
            <Section title={t("detail.findings")}>
              <List items={p.results} />
              {p.resultsNote && <p className="muted-note">{p.resultsNote}</p>}
            </Section>
          )}
          {p.screenshots?.length > 0 && (
            <Section title={t("detail.shots")}>
              <div className="shots">
                {p.screenshots.map((s, i) => (
                  <Shot
                    key={s.src}
                    shot={s}
                    onOpen={(e) => {
                      opener.current = e.currentTarget;
                      setViewer(i);
                    }}
                  />
                ))}
              </div>
            </Section>
          )}
          {p.callout && <div className="callout">{p.callout}</div>}
        </div>

        <aside className="aside" aria-label={t("detail.facts")}>
          <div className="card">
            <h3>{t("detail.role")}</h3>
            <p>{p.role}</p>
          </div>
          <div className="card">
            <h3>{t("detail.tech")}</h3>
            <StackGroup group={p.stackMine} mine />
            {(p.stackTeam || []).map((g) => (
              <StackGroup key={g.label} group={g} />
            ))}
          </div>
        </aside>
      </div>

      {p.screenshots?.length > 0 && (
        <Lightbox
          shots={p.screenshots}
          index={viewer}
          onChange={setViewer}
          onClose={() => {
            setViewer(null);
            opener.current?.focus();
          }}
        />
      )}
    </>
  );
}
