import React from "react"
import PostLink from "../components/post-link"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FancyParagraph from "../components/fancy-paragraph"
import FancyTitle from "../components/title"
import Image from "../components/image"
import twothumbs from "../images/twothumbs.jpg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FancyTitle titleText="All the places that have gotten my two thumbs up" />
    <FancyParagraph paragraphText="Welcome" />
    <img
      src={twothumbs}
      key="src/images/gatsby-icon.png"
      alt="two thumbs up"
      style={{ width: "50%", marginLeft: "25%" }}
    />
  </Layout>
)

export default IndexPage
