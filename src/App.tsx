import { useEffect, useState, type ReactNode } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, X, MoveRight, ChevronDown } from 'lucide-react'
import { SignalMark } from './components/SignalMark'
import { experiences } from './data/experiences'
import { usePointer } from './hooks/usePointer'

const nav = ['Experience', 'Programmes', 'About']

type ButtonProps = { children: ReactNode; href: string; secondary?: boolean }
function Button({ children, href, secondary = false }: ButtonProps) {
  return <a className={`button ${secondary ? 'secondary' : ''}`} href={href}>{children}<ArrowUpRight size={17} aria-hidden="true" /></a>
}

export default function App() {
  const [menu, setMenu] = useState(false)
  const [progress, setProgress] = useState(0)
  usePointer()

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenu(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return <main>
    <a className="skip-link" href="#experience">Skip to content</a>
    <div className="cursor-light" aria-hidden="true" />
    <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    <header className="topbar">
      <a href="#top" className="brand"><SignalMark small /><span>TECHFEST<em> IIT BOMBAY</em></span></a>
      <nav aria-label="Primary navigation">{nav.map(item => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</nav>
      <a href="#programmes" className="nav-cta">Enter the signal <ArrowUpRight size={15} aria-hidden="true" /></a>
      <button className="menu-btn" onClick={() => setMenu(open => !open)} aria-label="Toggle navigation menu" aria-expanded={menu} aria-controls="mobile-navigation">{menu ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      {menu && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{nav.map(item => <a onClick={() => setMenu(false)} href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}<a onClick={() => setMenu(false)} href="#programmes">Explore programmes</a></nav>}
    </header>

    <section id="top" className="hero">
      <div className="hero-noise" aria-hidden="true" /><div className="scanline" aria-hidden="true" /><div className="orb orb-a" aria-hidden="true" /><div className="orb orb-b" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="satellite s-one" aria-hidden="true">▲<span>19.125° N</span></div><div className="satellite s-two" aria-hidden="true">✦<span>72.915° E</span></div>
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse" aria-hidden="true" /> IIT BOMBAY / EST. 1998 <b>—</b> EDITION 30</div>
        <h1><span>THE</span><strong>CURIOUS</strong><i>WILL</i><strong>MOVE</strong><span>THE WORLD.</span></h1>
        <p>Where questions find momentum. Techfest is a meeting point for the makers, the restless, and the gloriously unfinished.</p>
        <div className="hero-actions"><Button href="#programmes">Explore Techfest</Button><Button href="#experience" secondary>Decode the signal</Button></div>
      </div>
      <div className="radar" aria-hidden="true"><div className="radar-rings" /><div className="radar-sweep" /><span className="r-dot one" /><span className="r-dot two" /><span className="r-dot three" /><b>TF<br />30</b></div>
      <div className="hero-foot" aria-hidden="true"><span>SCROLL TO DECODE</span><ChevronDown size={18} /><span>01 / 05</span></div>
    </section>

    <section id="experience" className="manifesto section">
      <div className="section-label">01 — THE FREQUENCY</div>
      <div className="manifesto-main"><p className="pre">NOT A SPECTATOR SPORT</p><h2>Built for the ones who <em>can’t leave</em> a question alone.</h2><div className="manifesto-side"><p>Techfest convenes students, thinkers and builders around the impulse to understand what is possible — and then push it a little further.</p><a href="#about">Why Techfest <MoveRight size={18} aria-hidden="true" /></a></div></div>
      <div className="ticker" aria-hidden="true"><span>SCIENCE / </span><span>TECHNOLOGY / </span><span>HUMANITY / </span><span>SCIENCE / </span><span>TECHNOLOGY / </span></div>
    </section>

    <section id="programmes" className="programmes section">
      <div className="section-head"><div><div className="section-label">02 — CHOOSE YOUR VECTOR</div><h2>More than<br /><em>one way in.</em></h2></div><p>Take the route that calls to you. The signal changes depending on where you stand.</p></div>
      <div className="experience-grid">{experiences.map(item => <article className={`experience-card ${item.accent}`} key={item.number}><div className="card-top"><span>{item.number}</span><span>{item.kind}</span><ArrowDownRight aria-hidden="true" /></div><div className="card-graphic" aria-hidden="true"><i /><i /><i /><i /></div><div className="card-copy"><h3>{item.title}</h3><p>{item.text}</p><a href="#about" aria-label={`Discover ${item.kind.toLowerCase()}`}><ArrowUpRight aria-hidden="true" /></a></div></article>)}</div>
    </section>

    <section id="about" className="signal-section">
      <div className="signal-pane"><div className="section-label">03 — FIELD NOTES</div><p>FROM POWAI<br />TO <em>EVERYWHERE.</em></p><div className="signal-meta"><span>INDIA’S CAMPUS<br />OF IDEAS</span><span>SCIENCE + ART<br />+ EVERY MAYBE</span></div></div>
      <div className="signal-display" aria-label="Signal transmission artwork"><div className="bar-code" aria-hidden="true">TF//IITB//30//SIGNAL</div><div className="wave wave-one" aria-hidden="true" /><div className="wave wave-two" aria-hidden="true" /><div className="wave wave-three" aria-hidden="true" /><div className="coordinates" aria-hidden="true">19° 07' 30.3&quot; N<br />72° 54' 54.5&quot; E</div><div className="transmit">TRANSMIT<br />YOUR<br /><b>IDEA</b></div></div>
    </section>

    <section className="closing section"><div className="section-label">04 — STAY ON CHANNEL</div><h2>Come with a<br /><em>question.</em></h2><p>Leave with a new one.</p><Button href="#programmes">Find your signal</Button><div className="closing-stamp" aria-hidden="true">30<br /><span>YEARS OF<br />CURIOSITY</span></div></section>
    <footer><div className="footer-brand"><SignalMark /><span>TECHFEST<br /><small>IIT BOMBAY</small></span></div><div><p>Official festival concept<br />Made for the curious.</p></div><div className="footer-links"><a href="#top">Back to top ↑</a><a href="https://techfest.org/" target="_blank" rel="noreferrer">techfest.org ↗</a></div><div className="footer-bottom">© TECHFEST IIT BOMBAY <span>NO 3D ASSETS. ALL SIGNAL.</span></div></footer>
  </main>
}
