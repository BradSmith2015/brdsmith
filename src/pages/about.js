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
          <h1>
            A <span> little</span> about me{" "}
          </h1>
          <p>
            I am 22 year old software developer from Perryville, Maryland. I
            recently graduated from CU-Boulder, where I studied Computer
            Science.
          </p>
        </div>
        <div className={aboutStyles.col}>
          <div>
            <Img
              className={aboutStyles.imgStyles}
              fluid={data.me.childImageSharp.fluid}
            />
          </div>
        </div>
        <div
          style={{ marginTop: "-10px" }}
          className={aboutStyles.col + "  " + aboutStyles.colHover}
        >
          <Img
            className={aboutStyles.imgStyles}
            fluid={data.outdoors.childImageSharp.fluid}
          />
          <div className={aboutStyles.overlayText}>
            <h3>I love outdoors! </h3>
            <p>
              I love being outdoors doing anything but I mostly enjoy climbing,
              hiking, kayaking, fishing, and skeet shooting,
            </p>
          </div>
        </div>
        <div
          className={
            aboutStyles.col +
            " " +
            aboutStyles.coladdMagin +
            "  " +
            aboutStyles.colHover
          }
        >
          <Img
            className={aboutStyles.imgStyles}
            fluid={data.switch.childImageSharp.fluid}
          />
          <div className={aboutStyles.overlayText}>
            <h3>I also love the indoors too! </h3>
            <p>
              When Im not outside I'm usually playing Super Smash Bros, Catan,
              or guitar.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </div>
)

export const query = graphql`
  query {
    me: file(relativePath: { eq: "Me.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    outdoors: file(relativePath: { eq: "outdoors.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    switch: file(relativePath: { eq: "switch.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
