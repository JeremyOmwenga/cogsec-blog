import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Article from './pages/Article.jsx'

// ── Import every MDX article here ──────────────────────────────
// Each MDX file exports its content as default and frontmatter as a named export.
// Add a new import line every time you create a new article.

import IntroCogsec, { frontmatter as fm0 } from './articles/intro-to-cogsec.mdx'

// Build the articles registry — newest first
export const ARTICLES = [
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
      <Route path="/article/:slug" element={<Article />} />
    </Routes>
  )
}
