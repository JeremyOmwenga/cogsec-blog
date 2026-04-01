import { Link } from 'react-router-dom'
import { useState } from 'react'

const tagColors = {
  'Cognitive Security': { bg: 'rgba(0,255,157,0.08)', color: 'var(--accent)' },
  'Infosec':            { bg: 'rgba(255,71,87,0.1)',  color: 'var(--red)' },
  'Privacy':            { bg: 'rgba(255,165,2,0.1)',  color: 'var(--amber)' },
  'OSINT':              { bg: 'rgba(0,255,157,0.08)', color: 'var(--accent)' },
  'Opinion':            { bg: 'rgba(255,71,87,0.1)',  color: 'var(--red)' },
}

const getTagStyle = (tag) =>
  tagColors[tag] || { bg: 'rgba(0,255,157,0.08)', color: 'var(--accent)' }

export default function ArticleCard({ slug, frontmatter, index }) {
  const [hovered, setHovered] = useState(false)
  const tagStyle = getTagStyle(frontmatter.tag)
  const idx = String(index + 1).padStart(2, '0')

  return (
    <Link
      to={`/article/${slug}`}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article style={{
        padding: '1.75rem 0',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        transition: 'padding-left 0.3s ease',
        paddingLeft: hovered ? '1.1rem' : '0',
        animation: `fadeUp 0.5s ${index * 0.08}s ease both`,
      }}>

        {/* left accent bar */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: '1.75rem',
          bottom: '1.75rem',
          width: '2px',
          background: 'var(--accent)',
          transform: hovered ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          transition: 'transform 0.3s ease',
          boxShadow: hovered ? '0 0 8px var(--accent)' : 'none',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
          {/* index number */}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--text-faint)',
            letterSpacing: '0.1em',
          }}>
            [{idx}]
          </span>

          {/* tag */}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: tagStyle.color,
            background: tagStyle.bg,
            padding: '0.15em 0.6em',
            borderRadius: '2px',
            border: `1px solid ${tagStyle.color}30`,
          }}>
            {frontmatter.tag}
          </span>

          {/* date */}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--text-faint)',
            marginLeft: 'auto',
            letterSpacing: '0.06em',
          }}>
            {frontmatter.date}
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
          fontWeight: 700,
          color: hovered ? 'var(--accent)' : 'var(--text)',
          marginBottom: '0.55rem',
          transition: 'color 0.2s',
          letterSpacing: '-0.02em',
        }}>
          {frontmatter.title}
        </h2>

        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          lineHeight: 1.65,
          marginBottom: '0.85rem',
          maxWidth: '560px',
        }}>
          {frontmatter.excerpt}
        </p>

        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.08em',
          color: hovered ? 'var(--accent)' : 'var(--text-faint)',
          transition: 'color 0.2s',
        }}>
          READ_ →
        </span>
      </article>
    </Link>
  )
}
