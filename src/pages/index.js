import React from "react"
import Layout from "../components/layout"
import ProjectPost from "../components/projectPost"
import indexStyles from "../styles/index.mod.scss"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Skills from "../components/skills"

export default ({ data }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title htmlAttributes={[{ lang: "en" }]}>Home</title>
        <link rel="canonical" href="https://www.brdsmith.com" />
      </Helmet>
      <Layout>
        <div className={indexStyles.heroContainer}>
          <div className={indexStyles.heroText}>
            <h1 style={{ fontWeight: 900, lineHeight: "60px" }}>
              Hello there! I'm Brad - <br />
              I'm a Software Developer
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
            I'm a 23-year-old software developer. I graduated from the
            University of Colorado - Boulder (Sko Buffs!) with a B.S. in
            Computer Science. I am currently working at
            <a href="http://vanguard.com/"> Vanguard</a> as Software Developer.
          </p>
          <p>
            I have also explored many different areas of software development
            such as Data visualization in D3.js, machine learning in Python
            (Keras/sci-kit learn), and recommender systems(lenskit).
          </p>
          <p>
            For the past year I have been working on Vanguard's Secure Overview
            and Holdings pages. Utilizing Angular, Node.js, Typescript, and AWS.
          </p>
        </div>
        <div style={{ marginTop: "100px" }}>
          <h1>My Skills</h1>
          <Skills />
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
