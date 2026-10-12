import { useEffect, useState } from "react";
import { profile, stats, about, skills, experience, projects, education } from "./data.js";

const NAV = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];

function Icon({ name }) {
  const paths = {
    github:
      "M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z",
    linkedin:
      "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z",
    mail: "M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.5l10 6.2 10-6.2V6H2Zm20 2.9-9.5 5.9a1 1 0 0 1-1 0L2 8.9V18h20V8.9Z",
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d={paths[name]} fill="currentColor" />
    </svg>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
    try {
      if (theme) localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => {
    const current =
      theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="logo" onClick={() => setMenuOpen(false)}>
            Arthi<span>.</span>
          </a>
          <nav className={menuOpen ? "open" : ""}>
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle colour theme">
              ◐
            </button>
            <button
              className="icon-btn menu-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="hello">Hi, I'm</p>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="tagline">{profile.tagline}</p>
            <div className="cta">
              <a className="btn primary" href="#projects">
                View my work
              </a>
              {profile.resume && (
                <a className="btn ghost" href={profile.resume} target="_blank" rel="noreferrer">
                  Download résumé
                </a>
              )}
              <a className="btn ghost" href="#contact">
                Contact me
              </a>
            </div>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Icon name="mail" />
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="code">
              <div className="dots">
                <i /> <i /> <i />
              </div>
              <pre>
                <span className="k">const</span> arthi = {"{"}
                {"\n"}  role: <span className="s">"Full Stack Developer"</span>,
                {"\n"}  backend: [<span className="s">"Spring Boot"</span>, <span className="s">"Node.js"</span>, <span className="s">"FastAPI"</span>],
                {"\n"}  frontend: [<span className="s">"React"</span>, <span className="s">"Tailwind"</span>],
                {"\n"}  data: [<span className="s">"PostgreSQL"</span>, <span className="s">"MongoDB"</span>, <span className="s">"Kafka"</span>],
                {"\n"}  basedIn: <span className="s">"Chennai"</span>,
                {"\n"}  openToWork: <span className="k">true</span>,
                {"\n"}{"}"};
              </pre>
            </div>
          </div>
        </section>

        <div className="stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <Section id="about" eyebrow="About" title="A bit about me">
          <div className="about">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="What I work with">
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.group} className="card">
                <h3>{s.group}</h3>
                <Tags items={s.items} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Where I've worked">
          <div className="job">
            <div className="job-head">
              <div>
                <h3>{experience.title}</h3>
                <p className="company">{experience.company}</p>
              </div>
              <span className="period">{experience.period}</span>
            </div>
            <p className="muted">{experience.summary}</p>
            <div className="timeline">
              {experience.projects.map((p) => (
                <article key={p.name} className="tl-item">
                  <h4>{p.name}</h4>
                  <Tags items={p.stack} />
                  <ul className="points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Things I've built">
          <div className="projects-grid">
            {projects.map((p) => (
              <article key={p.name} className={`card project ${p.featured ? "featured" : ""}`}>
                {p.badge && <span className="badge">{p.badge}</span>}
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <Tags items={p.stack} />
                <div className="links">
                  {p.live && (
                    <a className="link" href={p.live} target="_blank" rel="noreferrer">
                      Live demo ↗
                    </a>
                  )}
                  <a className="link" href={p.code} target="_blank" rel="noreferrer">
                    View code →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="Education & certification">
          <div className="edu">
            {education.map((e) => (
              <div key={e.title} className="edu-item">
                <div>
                  <h3>{e.title}</h3>
                  <p className="muted">{e.place}</p>
                </div>
                <span className="period">{e.period}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's work together">
          <div className="contact card">
            <p>
              I'm open to Full Stack Developer roles (Java or MERN). The quickest way to reach me is
              email.
            </p>
            <div className="cta">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
            </div>
            <p className="muted small">Based in {profile.location}</p>
          </div>
        </Section>
      </main>

      <footer>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
      </footer>
    </>
  );
}
