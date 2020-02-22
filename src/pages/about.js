import React from "react"
import Layout from "../components/layout"
import aboutStyles from "../styles/about.mod.scss"
export default () => (
  <div>
    <Layout>
      <div className={aboutStyles.AboutHeroContainer}>
        <div className={aboutStyles.col}>
          <h1>A little About me</h1>
          <p>
            This a rprojectj abdfalskj the afdlkj things that i di and and many
            kangrros died in the ware of 1882 so that what I think you should
            care about the most This a rprojectj abdfalskj the afdlkj things
            that i di and and many kangrros died in the ware of 1882 so that
            what I think you should care about the most{" "}
          </p>
        </div>
        <div className={aboutStyles.col}>
          <img src={"/images/Me.png"} />
        </div>
      </div>
    </Layout>
  </div>
)
