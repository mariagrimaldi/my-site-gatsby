import React from "react"
import FancyParagraph from "../components/fancy-paragraph"
import FancyTitle from "../components/title"
import Layout1 from "../components/newindex"

const AboutPage = () => (
  <Layout1>
    <FancyTitle titleText="About" />
    <FancyParagraph paragraphText="Travelling Europe to find all the places worthy of two thumbs up"></FancyParagraph>
  </Layout1>
)

export default AboutPage
