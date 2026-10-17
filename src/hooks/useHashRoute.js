import { useEffect, useState } from "react";

function parse() {
  const hash = window.location.hash;
  const m = hash.match(/^#\/projects\/([^/?#]*)/);
  if (m) return { projectId: decodeURIComponent(m[1]), section: "" };
  return { projectId: null, section: hash.replace(/^#\/?/, "") };
}

export default function useHashRoute() {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
