export const STATES = { Completed: "Completed", refining: "Being refined" };

export function StateBadge({ state }) {
  return (
    <span className={"badge state " + state}>{STATES[state] ?? state}</span>
  );
}

export default function Badges({ project: p }) {
  return (
    <div className="badges">
      <span className={"badge" + (p.team ? " team" : "")}>
        {p.team ? "Team project" : "Individual work"}
      </span>
      {p.kind && <span className="badge">{p.kind}</span>}
      {p.state && <StateBadge state={p.state} />}
    </div>
  );
}
