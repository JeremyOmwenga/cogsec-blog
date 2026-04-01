import { useState, useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import { ARTICLES } from '../App.jsx'

// Animated typing effect for the hero
function TypedText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, 28)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span style={{
          display: 'inline-block',
          width: '8px',
          height: '1em',
          background: 'var(--accent)',
          verticalAlign: 'middle',
          marginLeft: '2px',
          animation: 'blink 0.8s step-end infinite',
        }} />
      )}
    </span>
  )
}

export default function Home() {
  return (
    <>
      <Header />

      <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '4rem 0 3rem', borderBottom: '1px solid var(--border)' }}>

          {/* system prompt label */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--text-faint)',
            letterSpacing: '0.12em',
            marginBottom: '1.5rem',
            animation: 'fadeUp 0.4s ease both',
          }}>
            <span style={{ color: 'var(--accent)' }}>$</span> INITIALISING COGSEC TERMINAL...
          </div>

          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2.2rem, 6vw, 3.75rem)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.75rem',
            animation: 'fadeUp 0.5s 0.05s ease both',
          }}>
            <TypedText text="The mind is" delay={300} /><br />
            <span style={{ color: 'var(--accent)' }}>
              <TypedText text="the attack surface." delay={900} />
            </span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.82rem, 2vw, 0.95rem)',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            maxWidth: '540px',
            animation: 'fadeUp 0.5s 0.2s ease both',
          }}>
            A field journal on cognitive security, information operations, digital
            privacy, and the systems — technical and psychological — that determine
            who controls the information you act on.
          </p>

          {/* threat level indicator */}
          <div style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.5s 0.3s ease both',
          }}>
            {[
              { label: 'THREAT ENV', value: 'ELEVATED', color: 'var(--amber)' },
              { label: 'FOCUS',      value: 'COGSEC + INFOSEC', color: 'var(--accent)' },
              { label: 'EST',        value: '2026', color: 'var(--text-faint)' },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-faint)', letterSpacing: '0.12em' }}>
                  {label}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color, letterSpacing: '0.06em' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── ARTICLES LIST ── */}
        <section style={{ padding: '2rem 0 0' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--text-faint)',
            letterSpacing: '0.14em',
            marginBottom: '0.5rem',
            animation: 'fadeUp 0.4s 0.35s ease both',
          }}>
            // TRANSMISSION LOG — {ARTICLES.length} ENTR{ARTICLES.length === 1 ? 'Y' : 'IES'}
          </div>

          {ARTICLES.map((article, i) => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              frontmatter={article.frontmatter}
              index={i}
            />
          ))}

          {/* last border */}
          <div style={{ borderBottom: '1px solid var(--border)' }} />
        </section>

      </main>

      <Footer />
    </>
  )
}
