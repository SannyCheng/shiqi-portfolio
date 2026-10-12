import React from 'react'
import ReactDOM from 'react-dom/client'
import { profile } from './data/profile'
import './styles.css'

const Arrow = () => <span aria-hidden="true">↗</span>

function Nav() {
  const links = ['About', 'Experience', 'Projects', 'Education', 'Contact']
  return <header className="nav-wrap"><nav className="nav shell" aria-label="Primary navigation">
    <a href="#top" className="wordmark">SC<span>.</span></a>
    <div className="nav-links">{links.map(x => <a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div>
    <a className="nav-cta" href={`mailto:${profile.email}`}>Let’s talk <Arrow /></a>
  </nav></header>
}

function SectionHead({ index, title, note }) {
  return <div className="section-head"><span>{index}</span><h2>{title}</h2>{note && <p>{note}</p>}</div>
}

function App() {
  return <main id="top">
    <Nav />
    <section className="hero shell">
      <div className="hero-copy reveal">
        <p className="eyebrow"><i /> {profile.eyebrow}</p>
        <h1>{profile.headline}</h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions"><a className="button dark" href="#projects">Explore my work <span>↓</span></a><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
      </div>
      <div className="hero-visual reveal delay">
        <img src={profile.images.hero} alt="Shiqi Cheng outdoors" />
        <div className="hero-caption"><span>Based in</span><strong>{profile.location}</strong></div>
        <div className="hero-stamp">SC<br/><small>Portfolio</small></div>
      </div>
      <div className="scroll-note">Scroll to discover <span>↓</span></div>
    </section>

    <section id="about" className="about section shell">
      <SectionHead index="01" title="A business lens, sharpened by data." />
      <div className="about-grid">
        <div className="about-copy">{profile.about.map(p => <p key={p}>{p}</p>)}<blockquote>“I care about the space between analysis and action.”</blockquote></div>
        <div className="about-photo"><img src={profile.images.portrait} alt="Shiqi Cheng at NUS"/><span>Economics foundation<br/>Data science direction</span></div>
      </div>
      <div className="stats">{profile.stats.map(s => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div>
    </section>

    <section id="experience" className="section ink"><div className="shell">
      <SectionHead index="02" title="Experience" note="A track record across industry, advisory and research." />
      <div className="timeline">{profile.experience.map((e, i) => <article className="experience-row" key={e.company}>
        <div className="experience-meta"><span>{e.date}</span><span>{e.place}</span></div>
        <div><p className="role">{e.role}</p><h3>{e.company}</h3><p className="summary">{e.summary}</p><ul>{e.highlights.map(h => <li key={h}>{h}</li>)}</ul></div>
        <span className="row-no">0{i+1}</span>
      </article>)}</div>
    </div></section>

    <section id="projects" className="section shell projects">
      <SectionHead index="03" title="Selected projects" note="Work that connects technical methods to real decisions." />
      <div className="project-list">{profile.projects.map((p, i) => <article className="project-card" key={p.title}>
        <div className="project-top"><span>{p.number}</span><span>{p.tag}</span><span>{p.date}</span></div>
        <h3>{p.title}</h3><p>{p.description}</p><small>{p.detail}</small>
        {i === 0 && <div className="mini-diagram"><span>Natural-language request</span><b>→</b><span>Structured inputs</span><b>→</b><span>Allocation decision</span></div>}
      </article>)}</div>
    </section>

    <section id="education" className="section sage"><div className="shell">
      <SectionHead index="04" title="Education & recognition" />
      <div className="education-grid"><div>{profile.education.map(e => <article className="education" key={e.school}><span>{e.date}</span><h3>{e.school}</h3><p>{e.degree}</p><small>{e.note}</small></article>)}</div>
      <div className="education-image"><img src={profile.images.graduation} alt="Shiqi Cheng at University of Nottingham graduation"/><div className="recognition"><p>Selected recognition</p>{profile.recognition.map(r => <strong key={r}>{r}</strong>)}</div></div></div>
    </div></section>

    <section id="leadership" className="section shell leadership">
      <SectionHead index="05" title="Leadership & community" note="Mentoring, editorial work and service alongside study." />
      <div className="lead-grid"><div className="lead-photo"><img src={profile.images.conference} alt="Shiqi Cheng presenting research at a conference"/><span>Research in conversation</span></div>
      <div>{profile.leadership.map(l => <article key={`${l.title}-${l.org}`}><div><h3>{l.title}</h3><p>{l.org}</p></div><span>{l.date}</span></article>)}</div></div>
    </section>

    <section id="skills" className="section skills"><div className="shell">
      <SectionHead index="06" title="Tools, methods & strengths" />
      <div className="skills-grid">{profile.skills.map(s => <article key={s.group}><h3>{s.group}</h3><div>{s.items.map(x => <span key={x}>{x}</span>)}</div></article>)}</div>
    </div></section>

    <section id="contact" className="contact"><div className="shell contact-grid">
      <div><p className="eyebrow"><i /> Open to meaningful conversations</p><h2>Let’s turn a complex question into a clear next step.</h2></div>
      <div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a><a href={`tel:${profile.phone.replaceAll(' ','')}`}>{profile.phone} <Arrow /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
    </div><footer className="shell"><span>© 2026 {profile.name}</span><a href="#top">Back to top ↑</a></footer></section>
  </main>
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
