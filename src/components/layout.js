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
        <a alt="My Github" href="https://github.com/BradSmith2015">
          <FontAwesomeIcon
            alt="github"
            icon={["fab", "github"]}
            size="2x"
            color="white"
          />
        </a>
        <a alt="My LinkedIn" href="https://www.linkedin.com/in/brdsmith/">
          <FontAwesomeIcon
            alt="linkedin"
            icon={["fab", "linkedin"]}
            size="2x"
            color="white"
          />
        </a>
      </div>
    </footer>
  </div>
)
