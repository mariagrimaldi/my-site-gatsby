import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/post-link"
import Layout1 from "../components/newindex"
import FancyTitle from "../components/title"

const PostsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout1>
      <FancyTitle titleText="List of Posts" />
      <hr
        style={{
          display: "block",
          padding: "0",
          borderWidth: "0.5px",
          marginLeft: "25%",
          marginRight: "25%",
          borderStyle: "dashed",
          marginBottom: "1rem",
        }}
      />
      <div>{Posts}</div>
    </Layout1>
  )
}

export default PostsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
