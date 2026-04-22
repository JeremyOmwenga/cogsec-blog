import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Article from './pages/Article.jsx'
import About from './pages/About.jsx'

// ── Import every MDX article here ──────────────────────────────
// Each MDX file exports its content as default and frontmatter as a named export.
// Add a new import line every time you create a new article.

import IntroCogsec, { frontmatter as fm0 } from './articles/intro-to-cogsec.mdx'

import PrivacyMyth, { frontmatter as fm1 } from './articles/privacy-is-a-myth.mdx'

import AiCybersec, { frontmatter as fm2 } from './articles/ai-in-cybersec.mdx'

import GlasswingMythos, { frontmatter as fm3 } from './articles/glasswing-mythos.mdx'

import MetaAttentionArch, { frontmatter as fm4 } from './articles/meta-attention-architecture.mdx'


// Build the articles registry — newest first
export const ARTICLES = [
     {
  slug:        'synthetic-reality-epistemic-collapse',
  frontmatter: fm5,
  Component:   SyntheticReality,
   },
    {
  slug:        'meta-attention-architecture',
  frontmatter: fm4,
  Component:   MetaAttentionArch,
   },
    {
  slug:        'glasswing-mythos',
  frontmatter: fm3,
  Component:   GlasswingMythos,
   },
   {
  slug:        'ai-in-cybersec',
  frontmatter: fm2,
  Component:   AiCybersec,
   },
   {
    slug:        'privacy-is-a-myth',
    frontmatter: fm1,
    Component:   PrivacyMyth,
  },
  {
    slug:      'intro-to-cogsec',
    frontmatter: fm0,
    Component:   IntroCogsec,
  },
]

export default function App() {
  return (
    <Routes>
      <Route path="/"              element={<Home />} />
       <Route path="/about"         element={<About />} />
      <Route path="/article/:slug" element={<Article />} />
    </Routes>
  )
}
