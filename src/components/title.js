import React from "react"
import title from "./title.module.css"

const FancyTitle = props => <p className={title.heading}>{props.titleText}</p>

export default FancyTitle
