import React from "react"
import Layout from "../components/layout"
import Skills from "../components/skills"
import resumeStyles from "../styles/resume.mod.scss"
import { Helmet } from "react-helmet"
export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title htmlAttributes={[{ lang: "en" }]}>Resume</title>
      <link rel="canonical" href="http://www.brdsmith.com/resume " />
      <meta name="description" content="Brad Smith's Resume" />
    </Helmet>
    <Layout>
      <div className={resumeStyles.resumeContainer}>
        <h1>Resume</h1>
        <p>
          Recent Computer Science Graduate with experience in web development
          looking for a position that provides an environment that promotes lean
          innovation, values independence and solves interesting problems.
        </p>
        <br />
        <div>
          <h2>Education</h2>
          <h4>Bachelor Of Science, Computer Science </h4>
          <p>University of Colorado - Boulder | 2015 - 2019 </p>
        </div>
        <div>
          <h2>Experience</h2>
          <h4>Co-Founder/VP Of Product </h4>
          <p>Magenta | 2019 - 2020 </p>
        </div>
        <div>
          <h2>Skills</h2>
          <Skills />
        </div>
      </div>
    </Layout>
  </div>
)
