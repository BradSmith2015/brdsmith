import React from "react"
import Img from "gatsby-image"

import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import aboutStyles from "../styles/about.mod.scss"

export default ({ data }) => (
  <div>
    <Helmet htmlAttributes={[{ lang: "en" }]}>
      <meta charSet="utf-8" />
      <title>About</title>
      <link rel="canonical" href="http://www.brdsmith.com/resume " />
      <meta name="description" content="A page about Brad Smith" />
    </Helmet>
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
          <div>
            <Img
              className={aboutStyles.imgStyles}
              fluid={data.file.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </Layout>
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "Me.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
