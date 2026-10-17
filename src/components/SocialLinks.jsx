import Icon from "./Icon.jsx";
import { data } from "../data/portfolio.js";

export default function SocialLinks({ labelled = false }) {
  const { links } = data;
  const items = [];
  if (links.github) items.push(["GitHub", links.github, "github"]);
  if (links.linkedin) items.push(["LinkedIn", links.linkedin, "linkedin"]);
  if (links.email) items.push(["Email", "mailto:" + links.email, "mail"]);

  return items.map(([label, href, ic]) => {
    const external = !href.startsWith("mailto:");
    const common = {
      href,
      rel: "noopener noreferrer",
      target: external ? "_blank" : undefined,
    };
    return labelled ? (
      <a key={label} className="btn ghost" {...common}>
        <Icon name={ic} />
        {label}
      </a>
    ) : (
      <a key={label} className="icon-btn" aria-label={label} {...common}>
        <Icon name={ic} />
      </a>
    );
  });
}
