import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FancyParagraph from "../components/fancy-paragraph"
import FancyTitle from "../components/title"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FancyTitle titleText="All the places that have gotten my two thumbs up" />
    <FancyParagraph paragraphText="Welcome" />
    <img
      src="src/images/twothumbs.jpg"
      key="src/images/twothumbs.jpg"
      alt="two thumbs up"
    />
  </Layout>
)

export default IndexPage
