import React from "react"
import { graphql } from "gatsby"

import FancyParagraph from "../components/fancy-paragraph"
import FancyTitle from "../components/title"
import Layout1 from "../components/newindex"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout1>
      <div className="blog-post-container">
        <div
          className="blog-post"
          style={{ textAlign: "center", margin: "0rem 8rem" }}
        >
          <FancyTitle titleText={frontmatter.title} />
          <FancyParagraph paragraphText={frontmatter.date} />
          <div style={{ fontFamily: "Catamaran" }}>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout1>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
