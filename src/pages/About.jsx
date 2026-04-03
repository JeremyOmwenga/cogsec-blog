import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const styles = {
  main: {
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    padding: '0 var(--gutter)',
  },
  hero: {
    padding: '3.5rem 0 2.5rem',
    borderBottom: '1px solid var(--border)',
    animation: 'fadeUp 0.5s ease both',
  },
  prompt: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: 'var(--text-faint)',
    letterSpacing: '0.12em',
    marginBottom: '1.25rem',
  },
  title: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 800,
    color: 'var(--text)',
    letterSpacing: '-0.03em',
    lineHeight: 1.08,
    marginBottom: '1.5rem',
  },
  accent: { color: 'var(--accent)' },
  standfirst: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    lineHeight: 1.8,
    color: 'var(--text-muted)',
    maxWidth: '520px',
  },
  body: {
    padding: '2.5rem 0',
    borderBottom: '1px solid var(--border)',
    animation: 'fadeUp 0.5s 0.1s ease both',
  },
  p: {
    fontSize: '0.97rem',
    lineHeight: 1.85,
    color: 'var(--text)',
    marginBottom: '1.3rem',
  },
  blockquote: {
    margin: '2rem 0',
    padding: '1.1rem 1.5rem',
    borderLeft: '2px solid var(--accent)',
    background: 'rgba(0,255,157,0.05)',
    borderRadius: '0 4px 4px 0',
  },
  bqText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.88rem',
    color: 'var(--text-muted)',
    lineHeight: 1.7,
    margin: 0,
  },
  mapSection: {
    padding: '2.5rem 0 3rem',
    animation: 'fadeUp 0.5s 0.2s ease both',
  },
  sectionLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.62rem',
    color: 'var(--text-faint)',
    letterSpacing: '0.14em',
    marginBottom: '1.75rem',
  },
  contact: {
    padding: '2rem 0 3.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    animation: 'fadeUp 0.5s 0.3s ease both',
  },
  contactText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    color: 'var(--text-faint)',
    letterSpacing: '0.06em',
  },
  contactLink: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    color: 'var(--accent)',
    letterSpacing: '0.08em',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    border: '1px solid var(--border-bright)',
    borderRadius: '3px',
    transition: 'background 0.2s, border-color 0.2s',
  },
}

// ── Mind Map SVG ─────────────────────────────────────────────────
function MindMap() {
  const cx = 380
  const cy = 260

  const core = { x: cx, y: cy, label: 'COGSEC', sub: 'Cognitive Security' }

  const nodes = [
    { id: 'cybersec',   x: cx,       y: cy - 155, label: 'CYBERSEC',       sub: 'Threat intel · SOC · IR' },
    { id: 'infops',     x: cx + 175, y: cy - 85,  label: 'INFO OPS',       sub: 'Disinfo · Influence · IO' },
    { id: 'privacy',    x: cx + 185, y: cy + 65,  label: 'PRIVACY',        sub: 'Data sovereignty · Anon' },
    { id: 'iam',        x: cx + 45,  y: cy + 160, label: 'IAM',            sub: 'Identity · Auth · Zero Trust' },
    { id: 'opsec',      x: cx - 145, y: cy + 145, label: 'OPSEC',          sub: 'Tradecraft · TTPs' },
    { id: 'soceng',     x: cx - 195, y: cy + 20,  label: 'SOC. ENG.',      sub: 'Phishing · Vishing · Pretexting' },
    { id: 'medialit',   x: cx - 170, y: cy - 100, label: 'MEDIA LIT.',     sub: 'Verification · Source crit.' },
    { id: 'osint',      x: cx - 20,  y: cy - 230, label: 'OSINT',          sub: 'Open source intelligence' },
  ]

  const tagColors = {
    cybersec:  '#00ff9d',
    infops:    '#ff4757',
    privacy:   '#ffa502',
    iam:       '#00ff9d',
    opsec:     '#ffa502',
    soceng:    '#ff4757',
    medialit:  '#00ff9d',
    osint:     '#ffa502',
  }

  return (
    <svg
      viewBox="0 0 760 520"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* Background */}
      <rect width="760" height="520" fill="#0e1410" rx="6" />

      {/* Scanlines */}
      {Array.from({ length: 130 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 4} x2="760" y2={i * 4}
          stroke="rgba(0,255,157,0.018)" strokeWidth="1" />
      ))}

      {/* Grid dots */}
      {Array.from({ length: 20 }).map((_, row) =>
        Array.from({ length: 40 }).map((_, col) => (
          <circle key={`${row}-${col}`}
            cx={col * 20 + 10} cy={row * 26 + 13}
            r="0.8" fill="rgba(0,255,157,0.07)" />
        ))
      )}

      {/* Connector lines */}
      {nodes.map(n => (
        <line key={n.id}
          x1={cx} y1={cy} x2={n.x} y2={n.y}
          stroke={tagColors[n.id]}
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="4 4"
        />
      ))}

      {/* Outer nodes */}
      {nodes.map(n => {
        const color = tagColors[n.id]
        return (
          <g key={n.id}>
            {/* glow circle */}
            <circle cx={n.x} cy={n.y} r="36"
              fill={color} fillOpacity="0.04"
              stroke={color} strokeOpacity="0.15" strokeWidth="1" />
            {/* label */}
            <text x={n.x} y={n.y - 7}
              textAnchor="middle"
              fontFamily="'Syne Mono', monospace"
              fontSize="9.5"
              fontWeight="400"
              fill={color}
              letterSpacing="1.5">
              {n.label}
            </text>
            {/* sublabel */}
            <text x={n.x} y={n.y + 9}
              textAnchor="middle"
              fontFamily="'Syne Mono', monospace"
              fontSize="7"
              fill="rgba(180,220,185,0.4)"
              letterSpacing="0.5">
              {n.sub}
            </text>
          </g>
        )
      })}

      {/* Core node */}
      <circle cx={cx} cy={cy} r="52"
        fill="#0a0f0b"
        stroke="#00ff9d" strokeWidth="1.5"
        strokeOpacity="0.6" />
      <circle cx={cx} cy={cy} r="58"
        fill="none"
        stroke="#00ff9d" strokeWidth="0.5"
        strokeOpacity="0.15"
        strokeDasharray="3 5" />
      {/* glow */}
      <circle cx={cx} cy={cy} r="52"
        fill="rgba(0,255,157,0.06)" />

      <text x={cx} y={cy - 8}
        textAnchor="middle"
        fontFamily="'Syne Mono', monospace"
        fontSize="13"
        fontWeight="400"
        fill="#00ff9d"
        letterSpacing="3">
        {core.label}
      </text>
      <text x={cx} y={cy + 10}
        textAnchor="middle"
        fontFamily="'Syne Mono', monospace"
        fontSize="7.5"
        fill="rgba(0,255,157,0.55)"
        letterSpacing="1">
        {core.sub}
      </text>

      {/* Legend */}
      {[
        { color: '#00ff9d', label: 'Defence / Intel' },
        { color: '#ff4757', label: 'Threat / Influence' },
        { color: '#ffa502', label: 'Tradecraft / Ops' },
      ].map((l, i) => (
        <g key={l.label} transform={`translate(${18}, ${460 + i * 16})`}>
          <rect width="8" height="8" rx="1" fill={l.color} fillOpacity="0.7" />
          <text x="14" y="7.5"
            fontFamily="'Syne Mono', monospace"
            fontSize="7.5"
            fill="rgba(180,220,185,0.45)"
            letterSpacing="0.5">
            {l.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

// ── Page ─────────────────────────────────────────────────────────
export default function About() {
  return (
    <>
      <Header />
      <main style={styles.main}>

        {/* Hero */}
        <section style={styles.hero}>
          <div style={styles.prompt}>
            <span style={{ color: 'var(--accent)' }}>$</span> cat about.txt
          </div>
          <h1 style={styles.title}>
            Why this<br />
            <span style={styles.accent}>exists.</span>
          </h1>
          <p style={styles.standfirst}>
            Awareness is the first line of defence. Most people never get it.
          </p>
        </section>

        {/* Body */}
        <section style={styles.body}>
          <p style={styles.p}>
            I built this site because cognitive security is the most consequential
            field most people have never heard of. We talk endlessly about
            cybersecurity — firewalls, breaches, ransomware — but the more
            fundamental vulnerability gets almost no attention: the human mind, and
            its near-total lack of defences against coordinated manipulation in a
            digital environment.
          </p>

          <p style={styles.p}>
            The infrastructure of the modern internet was not designed for trust. It
            was designed for engagement. Those are opposite objectives. Platforms
            optimise for attention, and the content that captures attention most
            reliably is content that triggers threat responses, tribal instincts, and
            emotional arousal. This is not a bug. It is the product. And it creates
            ideal conditions for anyone who wants to weaponise information.
          </p>

          <blockquote style={styles.blockquote}>
            <p style={styles.bqText}>
              The goal is not to make you believe a specific lie. The goal is to
              degrade your ability to distinguish lies from truth at all.
            </p>
          </blockquote>

          <p style={styles.p}>
            Cognitive security sits at the intersection of infosec, psychology,
            media literacy, and geopolitics. It asks who controls the information
            you act on, how they got that control, and what you can do about it.
            These are not niche technical questions. They are the central questions
            of political and personal agency in the digital age.
          </p>

          <p style={styles.p}>
            This blog documents that field — its methods, its failures, its tools,
            and the broader ecosystem of disciplines it touches. No jargon for its
            own sake. No alarmism without substance. Just clear writing about a
            threat that deserves serious attention.
          </p>
        </section>

        {/* Mind map */}
        <section style={styles.mapSection}>
          <div style={styles.sectionLabel}>
            // FIELD MAP — ADJACENT DISCIPLINES
          </div>
          <MindMap />
        </section>

        {/* Contact */}
        <div style={styles.contact}>
          <span style={styles.contactText}>
            QUESTIONS, TIPS, DISAGREEMENTS —
          </span>
          <a href="mailto:jeremyangwenyi.ja@gmail.com" style={styles.contactLink}>
            OPEN A CHANNEL →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
