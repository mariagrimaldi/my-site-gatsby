import React from "react"
import { Helmet } from "react-helmet"

import FancyTitle from "../components/title"
import twothumbs from "../images/twothumbs.jpg"
import SEO from "../components/seo"
import Layout1 from "../components/newindex"

const IndexPage = () => (
  <Layout1>
    {/* <SEO title=" " /> */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>Two Thumbs Up!</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <FancyTitle titleText="All the places that have gotten my two thumbs up" />
    <img
      src={twothumbs}
      alt="two thumbs up"
      style={{ width: "50%", marginLeft: "25%" }}
    />
  </Layout1>
)

export default IndexPage
