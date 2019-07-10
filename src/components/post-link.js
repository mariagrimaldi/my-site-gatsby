import React from "react"
import { Link } from "gatsby"
import postLink from "./post-link.module.css"
import { Divider } from "antd"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path} className={postLink.PostsLink}>
      {post.frontmatter.title} - ({post.frontmatter.date})
    </Link>
    {/* <Divider dashed style={{ backgroundColor: "black", width: "50%" }} /> */}
    <hr />
  </div>
)

export default PostLink
