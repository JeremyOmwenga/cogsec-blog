import { useParams, Navigate } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ArticleLayout, { components } from '../components/ArticleLayout.jsx'
import { ARTICLES } from '../App.jsx'

export default function Article() {
  const { slug } = useParams()
  const article = ARTICLES.find((a) => a.slug === slug)

  if (!article) return <Navigate to="/" replace />

  const { Component, frontmatter } = article

  return (
    <>
      <Header />
      <ArticleLayout frontmatter={frontmatter}>
        <MDXProvider components={components}>
          <Component />
        </MDXProvider>
      </ArticleLayout>
      <Footer />
    </>
  )
}
