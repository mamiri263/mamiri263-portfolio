import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  navLinkText,
  box,
} from '../../components/layout.module.css'


const BlogPage = ({ data }) => {
  return (
    <Layout>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <div className={box}>
              <h2>
                <Link className={navLinkText} to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </div>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => (
  <>
    <Seo title="Blog posts" />
    <Seo />
  </>
)
export default BlogPage
