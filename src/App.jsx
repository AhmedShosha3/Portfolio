import { useEffect, useRef } from "react";
import { data, projectById } from "./data/portfolio.js";
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

const baseTitle = document.title;
const { links, person } = data;
const hasContact = Boolean(links.email || links.github || links.linkedin);

const NAV = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["certifications", "Certificates"],
];
if (hasContact) NAV.push(["contact", "Contact"]);
const SECTION_IDS = NAV.map(([id]) => id);

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const route = useHashRoute();
  const project =
    route.projectId !== null ? projectById(route.projectId) : undefined;
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
        ? `Project not found | ${person.name}`
        : baseTitle;
  }, [project, view]);

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
        Skip to content
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
