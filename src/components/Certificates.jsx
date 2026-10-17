import { useMemo, useState } from "react";
import { data } from "../data/portfolio.js";
import FilterBar from "./FilterBar.jsx";

export default function Certificates() {
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
              `${c.title} ${c.issuer} ${c.desc || ""}`.toLowerCase().includes(q)),
        )
        .sort((a, b) => (b.sort || "").localeCompare(a.sort || "")),
    [filter, q],
  );

  return (
    <section className="block" id="certifications" aria-labelledby="cert-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="cert-h">Certificates and courses</h2>
          <p className="lede">
            Completed courses, training programs and initiatives, listed with
            their real length. None is a vendor professional certification.
          </p>
        </div>
        <FilterBar
          options={data.certFilters}
          value={filter}
          onChange={setFilter}
          label="Filter certificates by topic"
        />
        <input
          className="search"
          type="search"
          placeholder="Search certificates"
          aria-label="Search certificates"
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
                {c.date && <p className="issuer">Completed {c.date}</p>}
                {c.desc && <p className="desc">{c.desc}</p>}
                {c.code && <p className="code">Verification code: {c.code}</p>}
              </article>
            ))
          ) : (
            <div className="empty">
              {q
                ? `No certificates match \u201C${query.trim()}\u201D. Clear the search to see them all.`
                : "No certificates in this topic yet."}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
