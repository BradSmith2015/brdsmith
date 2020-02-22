import React from "react"
import Header from "./header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import layoutStyles from "./layout.mod.scss"
export default ({ children }) => (
  <div>
    <Header />
    <div className={layoutStyles.layoutContainer}>{children}</div>
    <footer className={layoutStyles.footer}>
      <div>
        <h1>
          Brd
          <br /> Smith
        </h1>
      </div>
      <div>
        <a href="https://github.com/BradSmith2015">
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" color="white" />
        </a>
        <a href="https://www.linkedin.com/in/brdsmith/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" color="white" />
        </a>
      </div>
    </footer>
  </div>
)
