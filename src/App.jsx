import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Article from './pages/Article.jsx'

// ── Import every MDX article here ──────────────────────────────
// Each MDX file exports its content as default and frontmatter as a named export.
// Add a new import line every time you create a new article.

import IntroCogsec, { frontmatter as fm0 } from './articles/intro-to-cogsec.mdx'

import PrivacyMyth, { frontmatter as fm1 } from './articles/privacy-is-a-myth.mdx'

// Build the articles registry — newest first
export const ARTICLES = [
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
