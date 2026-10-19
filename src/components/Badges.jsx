import { useTranslation } from "react-i18next";

export function StateBadge({ state }) {
  const { t } = useTranslation();
  return (
    <span className={"badge state " + state}>{t("badge." + state, state)}</span>
  );
}

export default function Badges({ project: p }) {
  const { t } = useTranslation();
  return (
    <div className="badges">
      <span className={"badge" + (p.team ? " team" : "")}>
        {p.team ? t("badge.team") : t("badge.solo")}
      </span>
      {p.kind && <span className="badge">{p.kind}</span>}
      {p.state && <StateBadge state={p.state} />}
    </div>
  );
}
