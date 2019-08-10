import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{}}>{/* <h1>{siteTitle}</h1> */}</header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
