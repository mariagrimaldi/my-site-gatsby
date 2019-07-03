import React from "react"
import Layout from "../components/layout"
import FancyParagraph from "../components/fancy-paragraph"
import FancyTitle from "../components/title"

const AboutPage = () => (
  <Layout>
    <FancyTitle titleText="About Me" />
    <FancyParagraph paragraphText="helllllooooo world!"></FancyParagraph>
  </Layout>
)

export default AboutPage
