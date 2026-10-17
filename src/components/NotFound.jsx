import { useEffect, useRef } from "react";
import { data } from "../data/portfolio.js";
import Icon from "./Icon.jsx";

export default function NotFound({ id }) {
  const h1 = useRef(null);
  useEffect(() => {
    h1.current?.focus({ preventScroll: true });
  }, [id]);

  return (
    <div className="wrap detail-head">
      <a className="back" href="#projects">
        <Icon name="back" />
        All projects
      </a>
      <h1 ref={h1} tabIndex={-1}>
        Project not found
      </h1>
      <p className="lede">
        There is no project at &ldquo;{id}&rdquo;. The link may be mistyped or
        the project may have been renamed.
      </p>
      <div
        className="links"
        style={{
          marginTop: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem 1.2rem",
        }}
      >
        {data.projects.map((p) => (
          <a key={p.id} href={"#/projects/" + p.id}>
            {p.title}
          </a>
        ))}
      </div>
    </div>
  );
}
