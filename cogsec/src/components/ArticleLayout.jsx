import { Link } from 'react-router-dom'

const prose = {
  wrapper: {
    padding: '2.5rem 0 4rem',
    animation: 'fadeUp 0.5s 0.2s ease both',
  },
  p: {
    fontSize: '1rem',
    lineHeight: 1.85,
    color: 'var(--text)',
    marginBottom: '1.4rem',
  },
  h2: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
    fontWeight: 700,
    color: 'var(--text)',
    margin: '2.5rem 0 0.85rem',
    letterSpacing: '-0.01em',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  h2before: {
    content: '"##"',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--accent)',
    fontWeight: 400,
  },
  blockquote: {
    margin: '2rem 0',
    padding: '1.1rem 1.5rem',
    borderLeft: '2px solid var(--accent)',
    background: 'var(--accent-glow)',
    borderRadius: '0 4px 4px 0',
  },
  blockquoteP: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    lineHeight: 1.7,
    margin: 0,
  },
  code: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    background: 'var(--bg-elevated)',
    color: 'var(--accent)',
    padding: '0.15em 0.45em',
    borderRadius: '3px',
    border: '1px solid var(--border)',
  },
  hr: {
    border: 'none',
    borderTop: '1px solid var(--border)',
    margin: '2.5rem 0',
  },
}

// MDX component overrides — maps HTML elements to styled versions
const components = {
  p: (props) => <p style={prose.p} {...props} />,
  h2: ({ children, ...props }) => (
    <h2 style={prose.h2} {...props}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 400 }}>##</span>
      {children}
    </h2>
  ),
  h3: (props) => (
    <h3 style={{ ...prose.h2, fontSize: '1.05rem', margin: '1.75rem 0 0.6rem' }} {...props} />
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote style={prose.blockquote} {...props}>
      {children}
    </blockquote>
  ),
  // Override p inside blockquote
  code: (props) => <code style={prose.code} {...props} />,
  hr: () => <hr style={prose.hr} />,
  a: (props) => (
    <a style={{ color: 'var(--accent)', textDecoration: 'underline', textDecorationColor: 'var(--border-bright)' }} {...props} />
  ),
  strong: (props) => <strong style={{ color: 'var(--text)', fontWeight: 600 }} {...props} />,
  em: (props) => <em style={{ color: 'var(--text-muted)', fontStyle: 'italic' }} {...props} />,
}

export default function ArticleLayout({ frontmatter, children }) {
  return (
    <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--gutter)' }}>

      {/* Back link */}
      <div style={{ paddingTop: '2.5rem', animation: 'fadeUp 0.4s ease both' }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          color: 'var(--text-muted)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          transition: 'color 0.2s',
        }}>
          ← INDEX
        </Link>
      </div>

      {/* Article hero */}
      <header style={{ padding: '2rem 0 2rem', borderBottom: '1px solid var(--border)', animation: 'fadeUp 0.5s 0.05s ease both' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            background: 'var(--accent-glow)',
            padding: '0.15em 0.6em',
            borderRadius: '2px',
            border: '1px solid rgba(0,255,157,0.2)',
          }}>
            {frontmatter.tag}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-faint)', letterSpacing: '0.06em' }}>
            {frontmatter.date}
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--text)',
          letterSpacing: '-0.025em',
          lineHeight: 1.1,
          marginBottom: '1.25rem',
        }}>
          {frontmatter.title}
        </h1>

        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
            BY <span style={{ color: 'var(--accent)' }}>{frontmatter.author || 'ANON'}</span>
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-faint)' }}>
            {frontmatter.readTime || '5 MIN READ'}
          </span>
        </div>
      </header>

      {/* Lead */}
      {frontmatter.excerpt && (
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem',
          lineHeight: 1.75,
          color: 'var(--text-muted)',
          padding: '1.75rem 0 0',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '1.75rem',
          animation: 'fadeUp 0.5s 0.1s ease both',
        }}>
          {frontmatter.excerpt}
        </p>
      )}

      {/* Article body — MDX content with component overrides */}
      <div style={prose.wrapper}>
        {children}
      </div>

    </div>
  )
}

export { components }
