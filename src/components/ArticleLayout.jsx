import { Link } from 'react-router-dom'

// ── MDX prose component overrides ────────────────────────────────
export const components = {
  p: (props) => (
    <p style={{
      fontSize: '1rem',
      lineHeight: 1.9,
      color: 'var(--text)',
      marginBottom: '1.6rem',
    }} {...props} />
  ),
  h2: ({ children, ...props }) => (
    <h2 style={{
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
      fontWeight: 700,
      color: 'var(--text)',
      margin: '3rem 0 1rem',
      letterSpacing: '-0.01em',
      display: 'flex',
      alignItems: 'center',
      gap: '0.55rem',
    }} {...props}>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        color: 'var(--accent)',
        fontWeight: 400,
        flexShrink: 0,
      }}>##</span>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 style={{
      fontFamily: 'var(--font-sans)',
      fontSize: '1.05rem',
      fontWeight: 700,
      color: 'var(--text)',
      margin: '2.25rem 0 0.75rem',
      letterSpacing: '-0.01em',
    }} {...props}>
      {children}
    </h3>
  ),
  blockquote: ({ children }) => (
    <blockquote style={{
      margin: '2.25rem 0',
      padding: '1.25rem 1.6rem',
      borderLeft: '2px solid var(--accent)',
      background: 'rgba(0,255,157,0.05)',
      borderRadius: '0 4px 4px 0',
    }}>
      {/* strip the default <p> margin inside blockquotes */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.88rem',
        color: 'var(--text-muted)',
        lineHeight: 1.75,
      }}>
        {children}
      </div>
    </blockquote>
  ),
  code: (props) => (
    <code style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.84rem',
      background: 'var(--bg-elevated)',
      color: 'var(--accent)',
      padding: '0.15em 0.45em',
      borderRadius: '3px',
      border: '1px solid var(--border)',
    }} {...props} />
  ),
  hr: () => (
    <hr style={{
      border: 'none',
      borderTop: '1px solid var(--border)',
      margin: '3rem 0',
    }} />
  ),
  a: (props) => (
    <a style={{
      color: 'var(--accent)',
      textDecoration: 'underline',
      textDecorationColor: 'var(--border-bright)',
    }} {...props} />
  ),
  strong: (props) => (
    <strong style={{ color: 'var(--text)', fontWeight: 600 }} {...props} />
  ),
  em: (props) => (
    <em style={{ color: 'var(--text-muted)', fontStyle: 'italic' }} {...props} />
  ),
  ul: (props) => (
    <ul style={{
      paddingLeft: '1.25rem',
      marginBottom: '1.6rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }} {...props} />
  ),
  ol: (props) => (
    <ol style={{
      paddingLeft: '1.25rem',
      marginBottom: '1.6rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }} {...props} />
  ),
  li: (props) => (
    <li style={{
      fontSize: '0.97rem',
      lineHeight: 1.75,
      color: 'var(--text)',
      paddingLeft: '0.25rem',
    }} {...props} />
  ),
}

// ── Layout wrapper ────────────────────────────────────────────────
export default function ArticleLayout({ frontmatter, children }) {
  return (
    <div style={{
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
    }}>

      {/* Back */}
      <div style={{ paddingTop: '2.5rem', animation: 'fadeUp 0.4s ease both' }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          color: 'var(--text-muted)',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}>
          ← INDEX
        </Link>
      </div>

      {/* Hero */}
      <header style={{
        padding: '2.25rem 0 2.25rem',
        borderBottom: '1px solid var(--border)',
        animation: 'fadeUp 0.5s 0.05s ease both',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1.1rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            background: 'rgba(0,255,157,0.08)',
            padding: '0.2em 0.65em',
            borderRadius: '2px',
            border: '1px solid rgba(0,255,157,0.2)',
          }}>
            {frontmatter.tag}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--text-faint)',
            letterSpacing: '0.06em',
          }}>
            {frontmatter.date}
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)',
          fontWeight: 800,
          color: 'var(--text)',
          letterSpacing: '-0.025em',
          lineHeight: 1.12,
          marginBottom: '1.35rem',
        }}>
          {frontmatter.title}
        </h1>

        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
          }}>
            BY <span style={{ color: 'var(--accent)' }}>
              {frontmatter.author || 'ANON'}
            </span>
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-faint)',
          }}>
            {frontmatter.readTime || '5 MIN READ'}
          </span>
        </div>
      </header>

      {/* Lead / excerpt */}
      {frontmatter.excerpt && (
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.88rem',
          lineHeight: 1.8,
          color: 'var(--text-muted)',
          padding: '2rem 0',
          borderBottom: '1px solid var(--border)',
          margin: 0,
          animation: 'fadeUp 0.5s 0.1s ease both',
        }}>
          {frontmatter.excerpt}
        </p>
      )}

      {/* Body */}
      <div style={{
        padding: '2.75rem 0 5rem',
        animation: 'fadeUp 0.5s 0.18s ease both',
      }}>
        {children}
      </div>

    </div>
  )
}
