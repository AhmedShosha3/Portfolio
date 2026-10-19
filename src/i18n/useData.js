import { useTranslation } from "react-i18next";
import { data as en } from "../data/portfolio.js";
import { ar } from "./portfolio.ar.js";

const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);

function merge(base, over) {
  if (over === undefined) return base;
  if (Array.isArray(base) && Array.isArray(over))
    return base.some(isObj) ? base.map((b, i) => merge(b, over[i])) : over;
  if (isObj(base) && isObj(over)) {
    const out = { ...base };
    for (const k in over) out[k] = merge(base[k], over[k]);
    return out;
  }
  return over;
}

const arData = merge(en, ar);

export default function useData() {
  const { i18n } = useTranslation();
  return i18n.language === "ar" ? arData : en;
}
