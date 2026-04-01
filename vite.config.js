import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default defineConfig({
  plugins: [
    // MDX must come before React plugin
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,   // exports frontmatter as { frontmatter } from each .mdx
      ],
    }),
    react(),
  ],
  // If your GitHub repo is at username.github.io/cogsec-blog, set base: '/cogsec-blog/'
  // If using a custom domain (your case), leave as '/'
  base: '/',
})
