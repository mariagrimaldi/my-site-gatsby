import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import header from "./header.module.css"

import FancyTitle from "../components/title"

const Header = ({ siteTitle }) => (
  <header className={header.header}>
    <div>
      <h1 className={header.text}>
        <Link to="/" className={header.title}>
          {siteTitle}
        </Link>
        <Link to="/contact" className={header.link}>
          contact
        </Link>
        <Link to="/about" className={header.link}>
          about
        </Link>
        <Link to="/posts/" className={header.link}>
          posts
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
