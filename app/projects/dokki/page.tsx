import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dokki.one — Sofie Yang',
  description: 'AI-Native Personal Knowledge Base — collaboration OS for humans and agents.',
}

export default function DokkiPage() {
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
        <p className="eyebrow">Personal Productivity · Knowledge Base · Agentic Workflow</p>
        <h1 className="page-title">Dokki.one —<br /><em>AI-Native Knowledge Base</em></h1>
        <p className="page-desc">
          An AI-native personal knowledge management system with an AI copilot that has access to all your personal documents — search, edit, and write docs and forms, and manage your second brain through a conversational intelligent assistant.
        </p>

        <div className="hero-cta" style={{ marginBottom: '2rem' }}>
          <a href="https://dokki.one" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit Dokki.one ↗
          </a>
        </div>

        <div className="tags">
          <span className="tag">Knowledge Graph</span>
          <span className="tag">Agentic Workflow</span>
          <span className="tag">Vibe Coding</span>
          <span className="tag">Open Source</span>
          <span className="tag">AI Copilot</span>
        </div>
      </div>

      <hr className="divider narrow" />

      <div className="content-section">
        <div className="story">
          <p>
            Dokki.one is a collaboration OS built for humans and agents to work side by side in the same workspace. It reimagines how personal and team knowledge is captured, connected, and acted upon — with AI deeply embedded in every layer.
          </p>
          <p>
            The core idea: your documents shouldn&apos;t just be files you store. They should be a living knowledge graph that an AI copilot can reason over, retrieve from, and contribute to — turning static notes into an active second brain.
          </p>
        </div>

        <div className="innovation-grid">
          <div className="innovation-card">
            <div className="innovation-icon">🧠</div>
            <p className="innovation-label">Core Concept</p>
            <h3 className="innovation-title">Knowledge as a Living Graph</h3>
            <p className="innovation-desc">Documents, notes, and forms are connected into a dynamic knowledge graph the AI can traverse, query, and update in real time.</p>
          </div>
          <div className="innovation-card">
            <div className="innovation-icon">🤝</div>
            <p className="innovation-label">Key Innovation</p>
            <h3 className="innovation-title">Humans + Agents, Same Workspace</h3>
            <p className="innovation-desc">AI agents and human collaborators share the same interface — agents handle retrieval and drafting while humans guide strategy and review.</p>
          </div>
          <div className="innovation-card">
            <div className="innovation-icon">💬</div>
            <p className="innovation-label">Interaction Model</p>
            <h3 className="innovation-title">Conversational Interface</h3>
            <p className="innovation-desc">Search, edit, write, and manage your entire knowledge base through natural conversation — no command syntax required.</p>
          </div>
          <div className="innovation-card">
            <div className="innovation-icon">🔓</div>
            <p className="innovation-label">Philosophy</p>
            <h3 className="innovation-title">Open Source First</h3>
            <p className="innovation-desc">Built transparently and openly — accepting early access while the community shapes what the collaboration OS of the agentic era looks like.</p>
          </div>
        </div>
      </div>
    </>
  )
}
