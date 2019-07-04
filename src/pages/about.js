import React from "react"
import Layout from "../components/layout"
import FancyParagraph from "../components/fancy-paragraph"
import FancyTitle from "../components/title"

const AboutPage = () => (
  <Layout>
    <FancyTitle titleText="About" />
    <FancyParagraph paragraphText="Travelling Europe to find all the places worthy of two thumbs up"></FancyParagraph>
  </Layout>
)

export default AboutPage
