import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ProjectPost from "../components/projectPost"

export default ({ data }) => {
  let isLeft = true
  return (
    <div>
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
