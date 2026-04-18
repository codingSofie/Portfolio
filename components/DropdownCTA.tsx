'use client'

import { useState, useEffect, useRef } from 'react'

export default function DropdownCTA() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="dropdown-wrap" ref={ref}>
      <button className="btn btn-secondary" onClick={() => setOpen(o => !o)}>
        Get in Touch ▾
      </button>
      {open && (
        <div className="dropdown open">
          <a href="mailto:sofieyang.iu@gmail.com" className="dropdown-card">
            <span className="dropdown-card-icon">✉️</span>
            <span className="dropdown-card-label">Email Me</span>
          </a>
          <a href="https://www.linkedin.com/in/yang-sofie/" target="_blank" rel="noopener noreferrer" className="dropdown-card">
            <span className="dropdown-card-icon">💼</span>
            <span className="dropdown-card-label">LinkedIn</span>
          </a>
        </div>
      )}
    </div>
  )
}
