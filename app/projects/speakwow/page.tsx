import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Speakwow.ai — Sofie Yang',
  description: 'Multi-Agent Learning System — AI-powered English learning platform with MOE multi-agent architecture.',
}

export default function SpeakwowPage() {
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
        <p className="eyebrow">AI · Multi-Agent · EdTech</p>
        <h1 className="page-title">Speakwow.ai —<br /><em>Multi-Agent Learning System</em></h1>
        <p className="page-desc">
          Built an AI-powered English learning platform from zero — architecting a multi-agent orchestration system where specialized agents handled user profiling, learning plan design, conversation flow, scriptwriting, and automated feedback loops. Secured 4 institutional B2B partnerships through consultative sales.
        </p>
        <div className="hero-cta" style={{ marginBottom: '2rem' }}>
          <a href="https://speakwow.ai" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit Speakwow.ai ↗
          </a>
        </div>

        <div className="tags">
          <span className="tag">Multi-agent MOE system</span>
          <span className="tag">30% MoM growth</span>
          <span className="tag">60% CAC reduction</span>
          <span className="tag">24x user engagement</span>
          <span className="tag">B2B sales playbook</span>
          <span className="tag">Agentic AI</span>
          <span className="tag">LLM</span>
          <span className="tag">EdTech</span>
        </div>
      </div>

      <hr className="divider narrow" />

      <div className="videos-section">
        <p className="section-label">Demo Videos</p>
        <h2 className="section-title">See it in action</h2>

        <div className="videos-grid">
          <a
            className="video-card"
            href="https://www.bilibili.com/video/BV1YhbCekEkZ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="thumb-wrap">
              <Image
                src="/speakwow-demo1.jpeg"
                alt="Student Use — Speakwow.ai on iPad"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="play-overlay">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
                </div>
              </div>
            </div>
            <div className="video-body">
              <p className="video-label">2024</p>
              <h3 className="video-title">User Case — Speakwow.ai on iPad</h3>
              <p className="video-desc">Private primary school scenario — students practising English one-on-one with the AI on iPads in class, with each session personalised to the learner&apos;s level and pace.</p>
            </div>
          </a>

          <a
            className="video-card"
            href="https://www.bilibili.com/video/BV1QYbCe3Ef6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="thumb-wrap">
              <Image
                src="/speakwow-demo2.jpg"
                alt="Computer Lab — Speakwow.ai on PC"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="play-overlay">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
                </div>
              </div>
            </div>
            <div className="video-body">
              <p className="video-label">2024</p>
              <h3 className="video-title">User Case — Speakwow.ai on PC</h3>
              <p className="video-desc">Public school scenario in a Tier-3 city — students using Speakwow.ai in a shared computer lab, showing the platform&apos;s accessibility and impact beyond first-tier markets.</p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
