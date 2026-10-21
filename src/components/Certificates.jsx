import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import useData from "../i18n/useData.js";
import FilterBar from "./FilterBar.jsx";

export default function Certificates() {
  const { t } = useTranslation();
  const data = useData();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const list = useMemo(
    () =>
      data.certs
        .filter(
          (c) =>
            (filter === "all" || c.cat === filter) &&
            (!q ||
              `${c.title} ${c.issuer} ${c.desc || ""}`
                .toLowerCase()
                .includes(q)),
        )
        .sort((a, b) => (b.sort || "").localeCompare(a.sort || "")),
    [data, filter, q],
  );

  return (
    <section className="block" id="certifications" aria-labelledby="cert-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="cert-h">{t("certs.title")}</h2>
          <p className="lede">{t("certs.lede")}</p>
        </div>
        <FilterBar
          options={data.certFilters}
          value={filter}
          onChange={setFilter}
          label={t("certs.filter")}
        />
        <input
          className="search"
          type="search"
          placeholder={t("certs.search")}
          aria-label={t("certs.search")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="grid certs" aria-live="polite">
          {list.length ? (
            list.map((c) => (
              <article className="card cert" key={c.title}>
                <div className="row">
                  <span className="chip accent">{c.type}</span>
                  {c.length && <span className="chip">{c.length}</span>}
                </div>
                <h3>{c.title}</h3>
                <p className="issuer">{c.issuer}</p>
                {c.date && (
                  <p className="issuer">
                    {t("certs.completed", { date: c.date })}
                  </p>
                )}
                {c.desc && <p className="desc">{c.desc}</p>}
                {c.code && (
                  <p className="code">{t("certs.code", { code: c.code })}</p>
                )}
              </article>
            ))
          ) : (
            <div className="empty">
              {q
                ? `${t("certs.emptyQ")} \u201C${query.trim()}\u201D.`
                : `${t("certs.empty")}`}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
