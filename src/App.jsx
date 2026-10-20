import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { data as base } from "./data/portfolio.js";
import useData from "./i18n/useData.js";
import useTheme from "./hooks/useTheme.js";
import useHashRoute from "./hooks/useHashRoute.js";
import useActiveSection from "./hooks/useActiveSection.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import NotFound from "./components/NotFound.jsx";

const { links } = base;
const hasContact = Boolean(links.email || links.github || links.linkedin);
const NAV = [
  ["about", "nav.about"],
  ["skills", "nav.skills"],
  ["projects", "nav.projects"],
  ["experience", "nav.experience"],
  ["education", "nav.education"],
  ["certifications", "nav.certifications"],
];
if (hasContact) NAV.push(["contact", "nav.contact"]);
const SECTION_IDS = NAV.map(([id]) => id);

export default function App() {
  const { t } = useTranslation();
  const data = useData();
  const { person } = data;
  const [theme, toggleTheme] = useTheme();
  const route = useHashRoute();
  const project =
    route.projectId !== null
      ? data.projects.find((p) => p.id === route.projectId)
      : undefined;
  const view = project
    ? "detail"
    : route.projectId !== null
      ? "missing"
      : "home";
  const activeId = useActiveSection(SECTION_IDS, view === "home");
  const prevView = useRef(null);

  useEffect(() => {
    document.title = project
      ? `${project.title} | ${person.name}`
      : view === "missing"
        ? `${t("notFound.title")} | ${person.name}`
        : t("title");
  }, [project, view, person.name, t]);

  useEffect(() => {
    const was = prevView.current;
    prevView.current = view;
    if (view !== "home") {
      window.scrollTo(0, 0);
      return;
    }
    if (was !== "home") {
      const target = route.section && document.getElementById(route.section);
      if (target) target.scrollIntoView();
      else if (was !== null) window.scrollTo(0, 0);
    }
  }, [view, route.section]);

  return (
    <>
      <a className="skip" href="#main">
        {t("skip")}
      </a>
      <Header
        brand={person.brand}
        nav={NAV}
        activeId={activeId}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main id="main">
        <div id="home" hidden={view !== "home"}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certificates />
          {hasContact && <Contact />}
        </div>
        {project && (
          <div id="detail">
            <ProjectDetail project={project} />
          </div>
        )}
        {view === "missing" && (
          <div id="detail">
            <NotFound id={route.projectId} />
          </div>
        )}
      </main>
      <Footer nav={NAV} />
    </>
  );
}
