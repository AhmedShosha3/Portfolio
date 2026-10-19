import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import useData from "../i18n/useData.js";
import Icon from "./Icon.jsx";

export default function NotFound({ id }) {
  const h1 = useRef(null);
  const { t } = useTranslation();
  const data = useData();
  useEffect(() => {
    h1.current?.focus({ preventScroll: true });
  }, [id]);

  return (
    <div className="wrap detail-head">
      <a className="back" href="#projects">
        <Icon name="back" />
        {t("detail.all")}
      </a>
      <h1 ref={h1} tabIndex={-1}>
        {t("notFound.title")}
      </h1>
      <p className="lede">{t("notFound.body", { id })}</p>
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
