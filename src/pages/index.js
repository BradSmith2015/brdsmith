import React from "react"
import Layout from "../components/layout"
import ProjectPost from "../components/projectPost"
import indexStyles from "../styles/index.mod.scss"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://www.brdsmith.com " />
      </Helmet>
      <Layout>
        <div className={indexStyles.heroContainer}>
          <div className={indexStyles.heroText}>
            <h1 style={{ fontWeight: 900, lineHeight: "60px" }}>
              Hello there! I'm Brad - <br />
              I'm a Software Engineer
            </h1>
          </div>
          <div className={indexStyles.heroText}>
            <Img
              className={indexStyles.heroImage}
              fluid={data.file.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className={indexStyles.subparagraphs}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.
            Sit amet mauris commodo quis imperdiet.
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.
            Sit amet mauris commodo quis imperdiet.
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.
            Sit amet mauris commodo quis imperdiet.
          </p>
        </div>

        <div style={{ marginTop: "100px" }}>
          <h1 style={{ margin: "80px 0" }}>Some of my Past Projects </h1>
          <ProjectPost />
        </div>
      </Layout>
    </div>
  )
}

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
