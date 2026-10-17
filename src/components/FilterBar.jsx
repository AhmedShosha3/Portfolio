export default function FilterBar({ options, value, onChange, label }) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {options.map((f) => (
        <button
          key={f.id}
          className="filter"
          type="button"
          aria-pressed={value === f.id}
          onClick={() => onChange(f.id)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
