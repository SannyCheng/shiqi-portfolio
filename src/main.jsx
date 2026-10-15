import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { profile } from './data/profile'
import { experienceData } from './data/experienceData'
import { projectsData } from './data/projectsData'
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

function ProjectActions({ project }) {
  const pdfLabel = project.id === 'drg-research' ? 'View Full Poster' : project.id === 'market-strategy-analysis' ? 'View Full Report' : 'View PDF'
  const links = [
    project.pdfPath && { label: pdfLabel, href: project.pdfPath },
    project.videoPath && project.id !== 'small-talk-app' && { label: 'Watch Demo', href: project.videoPath },
    project.tableauUrl && { label: 'Explore Dashboard', href: project.tableauUrl },
    project.githubUrl && !project.githubCtaDescription && { label: 'View GitHub', href: project.githubUrl },
    ...project.externalLinks,
  ].filter(Boolean)

  if (!links.length) return null
  return <div className="project-actions">{links.map(link => <a key={`${link.label}-${link.href}`} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <Arrow /></a>)}</div>
}

function ProjectDetail({ project, onBack }) {
  const isTableauProject = project.id === 'tableau-dashboard'
  const isMarketProject = project.id === 'market-strategy-analysis'
  const isDrgProject = project.id === 'drg-research'
  const isDifferentialProject = project.id === 'differential-diagnosis'
  const isSmallTalkProject = project.id === 'small-talk-app'
  const isEditorialVisualProject = isTableauProject || isMarketProject || isDrgProject
  const detailTitle = project.detailTitle || project.title

  return <article className={`project-detail${isEditorialVisualProject ? ' editorial-visual-project-detail' : ''}${isTableauProject ? ' tableau-project-detail' : ''}${isMarketProject ? ' market-project-detail' : ''}${isDrgProject ? ' drg-project-detail' : ''}${isDifferentialProject ? ' differential-project-detail' : ''}${isSmallTalkProject ? ' small-talk-project-detail' : ''}`}>
    <button className="project-back" type="button" onClick={onBack}>← Back to Selected Projects</button>
    <div className="project-detail-hero">
      <div className="project-detail-meta"><span>{project.category}</span>{project.year && <span>{project.year}</span>}{(project.detailStatus || project.status) && <span className="project-status">{project.detailStatus || project.status}</span>}</div>
      <h3>{detailTitle}</h3>
      <p>{project.shortDescription}</p>
    </div>
    {isMarketProject ? (
      project.screenshots.length ? <div className="market-analysis-gallery">{project.screenshots.map((image, index) => <figure key={image}><img src={image} alt={`${project.title} analysis page ${index + 1}`} /></figure>)}</div> : <div className="editorial-compact-placeholder">Analysis previews coming soon</div>
    ) : isDrgProject ? (
      project.coverImage ? <div className="drg-poster-showcase">{project.pdfPath ? <a href={project.pdfPath} target="_blank" rel="noopener noreferrer" aria-label="View full DRG research poster"><img src={project.coverImage} alt={`${project.title} poster preview`} /></a> : <img src={project.coverImage} alt={`${project.title} poster preview`} />}</div> : <div className="editorial-compact-placeholder">Poster preview coming soon</div>
    ) : isDifferentialProject ? (
      <a className="github-project-feature" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><span>Repository</span><strong>{project.githubCtaLabel} <Arrow /></strong><p>{project.githubCtaDescription}</p></a>
    ) : isSmallTalkProject ? (
      !!(project.videoPath || project.screenshots.length) && <div className="small-talk-media">
        {project.videoPath && <div className="small-talk-video-frame"><span>Local demo</span><video controls preload="metadata" playsInline poster={project.videoPoster || undefined}><source src={project.videoPath} type="video/mp4" />Your browser does not support the video element.</video></div>}
        {project.screenshots[0] && <figure><img src={project.screenshots[0]} alt={`${project.title} application interface`} /></figure>}
      </div>
    ) : <div className={`project-detail-cover project-tone-${projectsData.indexOf(project) + 1}${isTableauProject ? ' tableau-dashboard-showcase' : ''}`}>
      {project.coverImage ? <img src={project.coverImage} alt={isTableauProject ? `${detailTitle} dashboard screenshot` : `${project.title} project cover`} /> : isTableauProject ? <span className="tableau-compact-placeholder">Dashboard preview coming soon</span> : <><span>Project {String(projectsData.indexOf(project) + 1).padStart(2, '0')}</span><strong>{project.title}</strong></>}
    </div>}
    <div className="project-detail-body">
      <div><span className="project-detail-label">Overview</span><p>{project.detailedOverview || project.shortDescription}</p></div>
      {project.role && <div><span className="project-detail-label">My contribution</span><p>{project.role}</p></div>}
      {!!project.methods.length && <div><span className="project-detail-label">Methods & tools</span><ul>{project.methods.map(method => <li key={method}>{method}</li>)}</ul></div>}
      {!!project.outcomes.length && <div><span className="project-detail-label">Outcomes</span>{project.outcomes.map(outcome => <p key={outcome}>{outcome}</p>)}</div>}
      <ProjectActions project={project} />
    </div>
    {!isMarketProject && !isSmallTalkProject && !!project.screenshots.length && <div className="project-gallery">{project.screenshots.map((image, index) => <img key={image} src={image} alt={`${project.title} screenshot ${index + 1}`} />)}</div>}
  </article>
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const openProject = project => {
    setSelectedProject(project)
    window.setTimeout(() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

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
      <div className="experience-list">{experienceData.map((experience, index) => <article className="experience-entry" key={experience.company}>
        <aside className="experience-meta">
          <span className="experience-index">0{index + 1}</span>
          <div><span className="meta-label">Period</span><strong>{experience.date}</strong></div>
          <div><span className="meta-label">Location</span><strong>{experience.location}</strong></div>
          <div><span className="meta-label">Role</span><strong>{experience.role}</strong></div>
        </aside>
        <div className="experience-story">
          <h3>{experience.company}</h3>
          <p className="experience-headline">{experience.headline}</p>
          <p className="experience-description">{experience.description}</p>
          <div className="achievement-list">{experience.achievements.map(achievement => <div className="achievement" key={`${experience.company}-${achievement.label}`}>
            <strong>{achievement.value}</strong>
            <div><span>{achievement.label}</span><p>{achievement.detail}</p></div>
          </div>)}</div>
        </div>
      </article>)}</div>
    </div></section>

    <section id="projects" className="section shell projects">
      <SectionHead index="03" title="Selected projects" note="Work that connects technical methods to real decisions." />
      {selectedProject ? <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} /> : <div className="projects-editorial-grid">{projectsData.map((project, index) => <button className={`project-editorial-card project-tone-${index + 1}`} type="button" onClick={() => openProject(project)} key={project.id}>
        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        <div className="project-card-heading"><span>{project.category}</span>{project.status && <em>{project.status}</em>}</div>
        <div className="project-card-copy"><h3>{project.title}</h3><p>{project.shortDescription}</p></div>
        <span className="project-open">View project <Arrow /></span>
      </button>)}</div>}
    </section>

    <section id="education" className="section sage"><div className="shell">
      <SectionHead index="04" title="Education & recognition" />
      <div className="education-grid"><div>{profile.education.map(e => <article className="education" key={e.school}><span>{e.date}</span><h3>{e.school}</h3><p>{e.degree}</p><small>{e.note}</small></article>)}</div>
      <div className="education-image"><img src={profile.images.graduation} alt="Shiqi Cheng at University of Nottingham graduation"/><div className="recognition"><p>Selected recognition</p>{profile.recognition.map(r => <strong key={r}>{r}</strong>)}</div></div></div>
    </div></section>

    <section id="leadership" className="section shell leadership">
      <SectionHead index="05" title="Leadership & community" note="Mentoring, editorial work and service alongside study." />
      <div className="lead-grid"><div className="lead-photo"><img src={profile.images.conference} alt="Shiqi Cheng presenting research at a conference"/><span>Research in conversation</span></div>
      <div>{profile.leadership.map(l => <article key={l.title}>
        <div className="lead-entry-main">
          <h3>{l.title}</h3>
          {l.appointments ? <div className="lead-appointments">{l.appointments.map(appointment => <div className="lead-appointment" key={appointment.org}><p>{appointment.org}</p><span>{appointment.date}</span></div>)}</div> : <>
            <p className="lead-org">{l.org}{l.subtitle && <small>{l.subtitle}</small>}</p>
            {l.description && <p className="lead-description">{l.description}</p>}
          </>}
        </div>
        {!l.appointments && <span className="lead-date">{l.date}</span>}
      </article>)}</div></div>
    </section>

    <section id="skills" className="section skills"><div className="shell">
      <SectionHead index="06" title="Tools, methods & strengths" />
      <div className="skills-grid">{profile.skills.map(s => <article key={s.group}><h3>{s.group}</h3><div>{s.items.map(x => <span key={x}>{x}</span>)}</div></article>)}</div>
    </div></section>

    <section id="contact" className="contact"><div className="shell contact-grid">
      <div><p className="eyebrow"><i /> Open to meaningful conversations</p><h2>Let’s turn a complex question into a clear next step.</h2></div>
      <div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
    </div><footer className="shell"><span>© 2026 {profile.name}</span><a href="#top">Back to top ↑</a></footer></section>
  </main>
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
