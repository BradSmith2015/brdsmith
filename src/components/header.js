import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import headerStyles from "./header.mod.scss"

const HeaderLink = ({ to, children }) => (
  <Link
    className={headerStyles.headerLink}
    activeClassName={headerStyles.headerLinksActive}
    to={to}
  >
    {children}
  </Link>
)
export default () => (
  <div
    className={headerStyles.headerContainer}
    style={{ paddingTop: rhythm(0) }}
  >
    <div className={headerStyles.headerLinks}>
      <Link to="/">
        <h3 style={{ fontWeight: 900 }}>
          Brd <br />
          Smith
        </h3>
      </Link>
      <HeaderLink to={"/projects"}>
        <h4>Projects</h4>
      </HeaderLink>
      <HeaderLink to={"/about"}>
        <h4>About</h4>
      </HeaderLink>
      <HeaderLink to={"/resume"}>
        <h4>Resume</h4>
      </HeaderLink>
      <HeaderLink to={"/contact"}>
        <h4>Contact</h4>
      </HeaderLink>
    </div>
  </div>
)
