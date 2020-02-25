import React from "react"
import Layout from "../components/layout"
import ProjectPost from "../components/projectPost"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title htmlAttributes={[{ lang: "en" }]}>Projects</title>
        <link rel="canonical" href="https://www.brdsmith.com/projects " />
        <meta name="description" content="All of my Past Projects" />
      </Helmet>
      <Layout>
        <h1 style={{ marginLeft: "20px", marginBottom: "40px" }}>
          {"Here are some of my"}
          <br /> {"Past Projects"}
        </h1>
        <ProjectPost />
      </Layout>
    </div>
  )
}
