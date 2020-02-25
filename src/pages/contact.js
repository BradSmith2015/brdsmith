import React from "react"
import Layout from "../components/layout"
import contactStyles from "../styles/contact.mod.scss"
import { Helmet } from "react-helmet"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title htmlAttributes={[{ lang: "en" }]}>Contact</title>
      <link rel="canonical" href="https://www.brdsmith.com/resume " />
      <meta name="description" content="Brad Smith's Contact Info" />
    </Helmet>
    <Layout>
      <div className={contactStyles.contactContainer}>
        {" "}
        <h1>Lets Talk!</h1>
        <p>
          Feel free to reach out to me if you have a question, looking for a
          developer, or want to build something together!
        </p>
        <h5>Bradsmith2015(at)gmail.com</h5>
        <h1>or</h1>
        <h5>
          {" "}
          <a href="https://www.linkedin.com/in/brdsmith/">
            Connect with me on LinkedIn
          </a>
        </h5>
      </div>
    </Layout>
  </div>
)
