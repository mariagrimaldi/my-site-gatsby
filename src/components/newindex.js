import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import newindex from "./newindex.module.css"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

import { Layout, Menu } from "antd"

const { Header, Content, Footer } = Layout

const Layout1 = ({ children }) => {
  const data = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Layout className="layout">
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <Link to="/" className={newindex.title}>
            {data.site.siteMetadata.title}
          </Link>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "30px", float: "right" }}
          >
            <Link to="/contact" className={newindex.link}>
              contact
            </Link>
            <Link to="/about" className={newindex.link}>
              about
            </Link>
            <Link to="/posts/" className={newindex.link}>
              posts
            </Link>
          </Menu>
        </Header>
        <Content
          style={{
            padding: "0 0px",
            minWidth: "-webkit-fill-available",
          }}
        >
          <div
            className={newindex.content}
            style={{
              background: "lavenderblush",
              padding: 50,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            bottom: "0rem",
            width: "100%",
            color: "black",
          }}
        >
          BGG ©2019
        </Footer>
      </Layout>
    </>
  )
}

Layout1.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout1
