import React from "react"
import { Link } from "gatsby"
import postLink from "./post-link.module.css"

const PostLink = ({ post }) => (
  <div>
    <div style={{ borderBottom: "2px solid #1f2d42", marginTop: "2rem" }} />
    <Link to={post.frontmatter.path} className={postLink.PostsLink}>
      {post.frontmatter.title} - ({post.frontmatter.date})
    </Link>
    <div style={{ borderBottom: "2px solid #1f2d42", marginTop: "2rem" }} />
  </div>
)

export default PostLink
