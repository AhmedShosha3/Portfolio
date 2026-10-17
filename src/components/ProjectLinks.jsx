import Icon from "./Icon.jsx";

export default function ProjectLinks({ links = [] }) {
  const shown = links.filter((l) => l.href);
  if (!shown.length) return null;
  return (
    <div className="proj-links">
      {shown.map((l) => (
        <a
          key={l.label}
          className="btn ghost"
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={l.icon || "external"} />
          {l.label}
        </a>
      ))}
    </div>
  );
}
