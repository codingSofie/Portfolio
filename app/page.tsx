import Image from 'next/image'
import DropdownCTA from '@/components/DropdownCTA'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* Navigation */}
      <nav>
        <a href="#" className="nav-logo">Sofie Yang</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="hero" id="about">
        <div className="hero-content">
          <p className="hero-eyebrow">AI GTM Leader · Builder · Strategist</p>
          <h1 className="hero-name">Sofie<br /><em>Yang</em></h1>
          <p className="hero-desc">
            I build growth infrastructure at the intersection of AI and go-to-market strategy — translating complex AI capabilities into systems that scale. Based in Singapore, operating globally.
          </p>
          <div className="hero-tags">
            <span className="tag">Agentic AI</span>
            <span className="tag">GTM Strategy</span>
            <span className="tag">Multi-Agent Systems</span>
            <span className="tag">B2B SaaS</span>
            <span className="tag">Growth Infrastructure</span>
            <span className="tag">Vibe Coding</span>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <DropdownCTA />
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <p className="card-label">Current Focus</p>
            <p className="card-title">AI-Native GTM Systems</p>
            <p className="card-sub">Building agentic workflows that automate growth infrastructure</p>

            <div className="articles-stack">
              {/* Article 1 */}
              <a href="#" className="article-card" target="_blank" rel="noopener noreferrer">
                <div className="article-cover">
                  <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <rect width="280" height="120" fill="#1A1714" />
                    <line x1="0" y1="40" x2="280" y2="40" stroke="#ffffff08" strokeWidth="1" />
                    <line x1="0" y1="80" x2="280" y2="80" stroke="#ffffff08" strokeWidth="1" />
                    <line x1="70" y1="0" x2="70" y2="120" stroke="#ffffff08" strokeWidth="1" />
                    <line x1="140" y1="0" x2="140" y2="120" stroke="#ffffff08" strokeWidth="1" />
                    <line x1="210" y1="0" x2="210" y2="120" stroke="#ffffff08" strokeWidth="1" />
                    <circle cx="60" cy="60" r="32" fill="none" stroke="#C96442" strokeWidth="1.5" opacity="0.9" />
                    <circle cx="60" cy="60" r="22" fill="none" stroke="#C96442" strokeWidth="1" opacity="0.6" />
                    <circle cx="60" cy="60" r="12" fill="#C96442" opacity="0.8" />
                    <line x1="93" y1="40" x2="120" y2="32" stroke="#C9644260" strokeWidth="1" />
                    <line x1="93" y1="60" x2="120" y2="60" stroke="#C9644260" strokeWidth="1" />
                    <line x1="93" y1="80" x2="120" y2="88" stroke="#C9644260" strokeWidth="1" />
                    <text x="124" y="36" fill="#E8D5C4" fontSize="8" fontFamily="sans-serif" opacity="0.9">Execution Layer</text>
                    <text x="124" y="64" fill="#E8D5C4" fontSize="8" fontFamily="sans-serif" opacity="0.9">Data Layer</text>
                    <text x="124" y="92" fill="#E8D5C4" fontSize="8" fontFamily="sans-serif" opacity="0.9">Learning Layer</text>
                    <rect x="198" y="8" width="68" height="18" rx="9" fill="#C9644230" />
                    <text x="232" y="20" fill="#C96442" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PART 01</text>
                  </svg>
                </div>
                <div className="article-body">
                  <p className="article-series">Essay Series · GTM Intelligence</p>
                  <p className="article-title">The Architecture of AI-Native GTM</p>
                  <p className="article-desc">Three foundational layers that power the next generation of marketing infrastructure.</p>
                </div>
              </a>

              {/* Article 2 */}
              <a href="#" className="article-card" target="_blank" rel="noopener noreferrer">
                <div className="article-cover">
                  <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <rect width="280" height="120" fill="#2A1F1A" />
                    <rect x="105" y="44" width="70" height="28" rx="6" fill="#C96442" opacity="0.9" />
                    <text x="140" y="61" fill="white" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">AI GTM Core</text>
                    <rect x="20" y="16" width="64" height="22" rx="5" fill="#ffffff12" stroke="#C9644250" strokeWidth="1" />
                    <text x="52" y="30" fill="#E8D5C4" fontSize="7" fontFamily="sans-serif" textAnchor="middle">GTM Ops Architect</text>
                    <rect x="20" y="80" width="64" height="22" rx="5" fill="#ffffff12" stroke="#C9644250" strokeWidth="1" />
                    <text x="52" y="94" fill="#E8D5C4" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Strategic Curator</text>
                    <rect x="196" y="16" width="60" height="22" rx="5" fill="#C9644220" stroke="#C9644240" strokeWidth="1" />
                    <text x="226" y="30" fill="#E8D5C4" fontSize="7" fontFamily="sans-serif" textAnchor="middle">SDR Agent</text>
                    <rect x="196" y="50" width="60" height="22" rx="5" fill="#C9644220" stroke="#C9644240" strokeWidth="1" />
                    <text x="226" y="64" fill="#E8D5C4" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Content Agent</text>
                    <rect x="196" y="84" width="60" height="22" rx="5" fill="#C9644220" stroke="#C9644240" strokeWidth="1" />
                    <text x="226" y="98" fill="#E8D5C4" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Data Agent</text>
                    <line x1="84" y1="27" x2="105" y2="52" stroke="#C9644160" strokeWidth="1" />
                    <line x1="84" y1="91" x2="105" y2="64" stroke="#C9644160" strokeWidth="1" />
                    <line x1="175" y1="52" x2="196" y2="27" stroke="#C9644160" strokeWidth="1" />
                    <line x1="175" y1="58" x2="196" y2="61" stroke="#C9644160" strokeWidth="1" />
                    <line x1="175" y1="64" x2="196" y2="95" stroke="#C9644160" strokeWidth="1" />
                    <rect x="8" y="104" width="68" height="12" rx="6" fill="#C9644230" />
                    <text x="42" y="113" fill="#C96442" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PART 02</text>
                  </svg>
                </div>
                <div className="article-body">
                  <p className="article-series">Essay Series · GTM Intelligence</p>
                  <p className="article-title">Rethinking Org &amp; Workflow for the Agentic Era</p>
                  <p className="article-desc">How teams must restructure around a central AI GTM intelligence core.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Experience */}
      <section id="experience">
        <p className="section-label reveal">Experience</p>
        <h2 className="section-title reveal">Where I&apos;ve <em>built</em><br />and what I&apos;ve learned</h2>
        <div>
          <div className="exp-item reveal">
            <div>
              <p className="exp-period">2023.7 — 2025.3</p>
              <p className="exp-company">Speakwow.ai</p>
            </div>
            <div>
              <p className="exp-role">Founder</p>
              <p className="exp-desc">
                Built an AI-powered English learning platform from zero — architecting a multi-agent orchestration system where specialized agents handled user profiling, learning plan design, conversation flow, scriptwriting, and automated feedback loops. Secured 4 institutional B2B partnerships through consultative sales.
              </p>
              <div className="exp-highlights">
                <span className="highlight-pill">Multi-agent MOE system</span>
                <span className="highlight-pill">30% MoM growth</span>
                <span className="highlight-pill">60% CAC reduction</span>
                <span className="highlight-pill">24x user engagement</span>
                <span className="highlight-pill">B2B sales playbook</span>
              </div>
            </div>
          </div>

          <div className="exp-item reveal">
            <div>
              <p className="exp-period">2022.8 — 2023.6</p>
              <p className="exp-company">Procter &amp; Gamble</p>
            </div>
            <div>
              <p className="exp-role">Senior Brand Manager</p>
              <p className="exp-desc">
                Led the Gillette Aurora launch across Greater China — coordinating product, analytics, marketing, and external partners end-to-end. Implemented an AI-driven CRM system on WeChat for hyper-personalized recommendations and built automated dashboards tracking 20+ performance metrics.
              </p>
              <div className="exp-highlights">
                <span className="highlight-pill">140% IYA</span>
                <span className="highlight-pill">160% sales target</span>
                <span className="highlight-pill">50M+ impressions</span>
                <span className="highlight-pill">AI-driven CRM</span>
                <span className="highlight-pill">2-year product roadmap</span>
              </div>
            </div>
          </div>

          <div className="exp-item reveal">
            <div>
              <p className="exp-period">2021.6 — 2022.7</p>
              <p className="exp-company">Evalon Tech Ltd.</p>
            </div>
            <div>
              <p className="exp-role">Marketing Director</p>
              <p className="exp-desc">
                Directed enterprise GTM and solution delivery programs for APAC Web3 clients. Managed a 14-person international team across Japan, Southeast Asia, and Greater China. Delivered 100+ AMAs, executive keynotes, and partner workshops enabling ecosystem adoption.
              </p>
              <div className="exp-highlights">
                <span className="highlight-pill">14-person team</span>
                <span className="highlight-pill">APAC multi-market</span>
                <span className="highlight-pill">100+ keynotes &amp; AMAs</span>
                <span className="highlight-pill">Web3 &amp; AI solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Projects */}
      <section id="projects">
        <p className="section-label reveal">Projects</p>
        <h2 className="section-title reveal">Things I&apos;ve <em>built</em></h2>
        <div className="projects-grid">

          <a className="project-card reveal" href="https://speakwow.ai" target="_blank" rel="noopener noreferrer">
            <div className="project-thumb" style={{ background: '#000', padding: 0 }}>
              <Image src="/speakwow-cover.jpg" alt="Speakwow.ai" width={640} height={360} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="project-body">
              <p className="project-type">AI · Multi-Agent</p>
              <h3 className="project-title">Speakwow.ai — Multi-Agent Learning System</h3>
              <p className="project-desc">MOE multi-agent architecture for adaptive English learning — 5 specialized agents coordinating user profiling, lesson planning, conversation, scripting, and automated feedback loops.</p>
              <div className="project-tags">
                <span className="project-tag">Agentic AI</span>
                <span className="project-tag">LLM</span>
                <span className="project-tag">B2B SaaS</span>
                <span className="project-tag">EdTech</span>
              </div>
            </div>
          </a>

          <a className="project-card reveal" href="https://dokki.one" target="_blank" rel="noopener noreferrer">
            <div className="project-thumb" style={{ background: '#000', padding: 0 }}>
              <Image src="/dokki-cover.jpg" alt="Dokki — AI-Native Knowledge Base" width={640} height={360} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="project-body">
              <p className="project-type">Personal Productivity · Knowledge Base</p>
              <h3 className="project-title">Dokki.one — AI-Native Knowledge Base</h3>
              <p className="project-desc">An AI-native personal knowledge management system with an AI copilot that has access to all your personal documents — search, edit, and write docs and forms, and manage your second brain through a conversational intelligent assistant.</p>
              <div className="project-tags">
                <span className="project-tag">Knowledge Graph</span>
                <span className="project-tag">Agentic Workflow</span>
                <span className="project-tag">Vibe Coding</span>
              </div>
            </div>
          </a>

          <a className="project-card reveal" href="/projects/lunahana" target="_blank">
            <div className="project-thumb" style={{ background: '#000', padding: 0 }}>
              <Image src="/lunahana.png" alt="LunaHana Game" width={640} height={360} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="project-body">
              <p className="project-type">Creative · Vibe Coding</p>
              <h3 className="project-title">AI-Built Game</h3>
              <p className="project-desc">Designed and built a game entirely through vibe coding — exploring the boundary between human creative direction and AI execution in interactive experiences.</p>
              <div className="project-tags">
                <span className="project-tag">Vibe Coding</span>
                <span className="project-tag">Game Design</span>
                <span className="project-tag">Creative AI</span>
              </div>
            </div>
          </a>

          <a className="project-card reveal" href="https://www.bilibili.com/video/BV1hw411Q72K/" target="_blank" rel="noopener noreferrer">
            <div className="project-thumb" style={{ background: '#061206' }}>
              <Image
                src="/razer-razor.png"
                alt="Gillette Labs × Razer"
                width={320}
                height={180}
                style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
            <div className="project-body">
              <p className="project-type">Brand Strategy · GTM · Rebrand</p>
              <h3 className="project-title">P&amp;G — Premium Product GTM &amp; Branding</h3>
              <p className="project-desc">Trained at one of the world&apos;s most rigorous brand schools — led the Gillette Labs × Razer collab to rebrand Gillette with a Gen-Z voice, driving 140% IYA and 160% of sales targets across Greater China.</p>
              <div className="project-tags">
                <span className="project-tag">Brand Strategy</span>
                <span className="project-tag">Product GTM</span>
                <span className="project-tag">Rebrand</span>
                <span className="project-tag">Gen-Z Marketing</span>
                <span className="project-tag">P&amp;G</span>
              </div>
            </div>
          </a>

          <a className="project-card reveal" href="#">
            <div className="project-thumb">📈</div>
            <div className="project-body">
              <p className="project-type">Growth · Experiment</p>
              <h3 className="project-title">SEO &amp; GEO Automation Experiments</h3>
              <p className="project-desc">Programmatic SEO and Generative Engine Optimization — building automated content pipelines and testing how AI-generated content ranks across traditional and AI search engines.</p>
              <div className="project-tags">
                <span className="project-tag">SEO</span>
                <span className="project-tag">GEO</span>
                <span className="project-tag">Automation</span>
                <span className="project-tag">Content Pipeline</span>
              </div>
            </div>
          </a>

          <a className="project-card reveal" href="https://rwa.naxlab.xyz/" target="_blank" rel="noopener noreferrer">
            <div className="project-thumb" style={{ background: '#000', padding: 0 }}>
              <Image src="/virium.png" alt="Virium 3D Gen-AI Game" width={640} height={360} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="project-body">
              <p className="project-type">3D Gen-AI · Game-Fi · Art Direction</p>
              <h3 className="project-title">Virium — 3D Gen-AI Game Project</h3>
              <p className="project-desc">Led a team of top artists to create a full game world and art direction for an international Game-Fi project — applying 3D generative AI to build immersive environments, characters, and visual systems from the ground up.</p>
              <div className="project-tags">
                <span className="project-tag">3D Gen-AI</span>
                <span className="project-tag">Game-Fi</span>
                <span className="project-tag">Art Direction</span>
                <span className="project-tag">World Building</span>
                <span className="project-tag">Web3</span>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* Contact */}
      <div className="contact-section" id="contact">
        <div>
          <p className="section-label">Let&apos;s Connect</p>
          <h2 className="contact-title">Building something<br /><em>interesting?</em><br />Let&apos;s talk.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:sofie.career@gmail.com" className="contact-link">
            <span className="contact-icon">✉</span>
            sofie.career@gmail.com
          </a>
          <a href="https://linkedin.com/in/yang-sofie" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">in</span>
            linkedin.com/in/yang-sofie
          </a>
        </div>
      </div>

      <footer>© 2025 Sofie Yang · Built with intention</footer>
    </>
  )
}
