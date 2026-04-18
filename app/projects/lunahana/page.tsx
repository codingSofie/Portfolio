import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LunaHana — Sofie Yang',
  description: 'A Witch RPG Built by AI — female-perspective RPG with LLM-powered NPCs built solo in 5 months.',
}

export default function LunaHanaPage() {
  return (
    <>
      <nav>
        <Link href="/" className="nav-logo">Sofie Yang</Link>
        <Link href="/#projects" className="nav-back">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M10 3L5 8l5 5" />
          </svg>
          Back to Projects
        </Link>
      </nav>

      <div className="project-hero">
        <p className="eyebrow">Creative · Vibe Coding · AI × Game</p>
        <h1 className="page-title" style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}>
          LunaHana —<br /><em>A Witch RPG Built by AI</em>
        </h1>
        <div className="tags">
          <span className="tag">Vibe Coding</span>
          <span className="tag">Game Design</span>
          <span className="tag">LLM NPCs</span>
          <span className="tag">Creative AI</span>
          <span className="tag">Human–AI Collaboration</span>
          <span className="tag">RPG</span>
        </div>
      </div>

      <hr className="divider narrow" />

      <div className="content-section">
        <div className="story">
          <p>
            LunaHana is a female-perspective RPG witch game that I built independently over five months — from concept to art to development. It has been my childhood dream to create a majo experience focused on self-discovery rather than traditional battles.
          </p>

          <div className="pull-quote">
            <p>&ldquo;I wanted to push the limits of AI-assisted programming and test how far AI can go in creative workflows.&rdquo;</p>
          </div>

          <p>
            The project was driven by my passion for exploring human–AI collaboration. The key innovation is the integration of LLM-based NPCs and AI-driven open-ended magical interactions that generate rich, branching storylines — essentially creating a living, breathing world where every player&apos;s experience can be unique.
          </p>
        </div>

        <div className="innovation-grid">
          <div className="innovation-card">
            <div className="innovation-icon">🧙‍♀️</div>
            <p className="innovation-label">Core Vision</p>
            <h3 className="innovation-title">Self-Discovery over Battle</h3>
            <p className="innovation-desc">A female-perspective RPG built around identity and growth — replacing combat loops with magical exploration and emotional storytelling.</p>
          </div>
          <div className="innovation-card">
            <div className="innovation-icon">🤖</div>
            <p className="innovation-label">Key Innovation</p>
            <h3 className="innovation-title">LLM-Powered NPCs</h3>
            <p className="innovation-desc">NPCs driven by large language models enable open-ended conversations and AI-generated branching storylines — every playthrough is unique.</p>
          </div>
          <div className="innovation-card">
            <div className="innovation-icon">🎨</div>
            <p className="innovation-label">Process</p>
            <h3 className="innovation-title">Solo-Built in 5 Months</h3>
            <p className="innovation-desc">Concept, art direction, and development handled end-to-end — testing the full creative potential of AI-assisted game production.</p>
          </div>
          <div className="innovation-card">
            <div className="innovation-icon">✨</div>
            <p className="innovation-label">Experiment</p>
            <h3 className="innovation-title">Human × AI Collaboration</h3>
            <p className="innovation-desc">A deliberate push to explore where human creative direction ends and AI execution begins — redefining what one person can build alone.</p>
          </div>
        </div>
      </div>
    </>
  )
}
