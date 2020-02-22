import React from "react"
import Layout from "../components/layout"
import resumeStyles from "../styles/resume.mod.scss"
import { Helmet } from "react-helmet"

const TableBulletPoint = ({ children }) => (
  <td>
    <span>&#x25A1;</span>
    {children}
  </td>
)
export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Resume</title>
      <link rel="canonical" href="http://www.brdsmith.com/resume " />
      <meta name="description" content="Brad Smith's Resume" />
    </Helmet>
    <Layout>
      <div className={resumeStyles.resumeContainer}>
        <h1>Resume</h1>
        <p>
          Designed multiple iterations of the front-end and landing page using
          Adobe XD .Designed multiple iterations of the front-end and landing
          page using Adobe XD. Designed multiple iterations of the front-end and
          landing page using Adobe XD 
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
          <table>
            <tr>
              <TableBulletPoint> React.js</TableBulletPoint>
              <TableBulletPoint> Javascript</TableBulletPoint>
              <TableBulletPoint> HTML/CSS</TableBulletPoint>
            </tr>
            <tr>
              <TableBulletPoint> Node.js</TableBulletPoint>
              <TableBulletPoint> Java</TableBulletPoint>
              <TableBulletPoint> Python</TableBulletPoint>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  </div>
)
