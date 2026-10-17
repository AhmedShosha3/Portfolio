import { data } from "../data/portfolio.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer({ nav }) {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div>
          <div className="name">{data.person.name}</div>
          <div>Mathematics and Computer Science, Suez University</div>
        </div>
        <nav aria-label="Footer">
          {nav.map(([id, label]) => (
            <a key={id} href={"#" + id}>
              {label}
            </a>
          ))}
        </nav>
        <div className="social">
          <SocialLinks />
        </div>
        <p className="copy">
          &copy; {new Date().getFullYear()} {data.person.name}
        </p>
      </div>
    </footer>
  );
}
