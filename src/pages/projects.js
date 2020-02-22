import React from "react"
import Layout from "../components/layout"
import ProjectPost from "../components/projectPost"
import { graphql } from "gatsby"

export default ({ data }) => {
  let isLeft = true
  return (
    <div>
      <Layout>
        <h1 style={{ marginLeft: "20px", marginBottom: "40px" }}>
          {"Here are some of my"}
          <br /> {"Past Projects"}
        </h1>
        {data.allProjectsJson.edges.map(({ node }) => {
          isLeft = !isLeft
          return <ProjectPost key={node.id} isOnLeft={isLeft} {...node} />
        })}
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allProjectsJson(sort: { fields: position }) {
      edges {
        node {
          id
          projectDescription
          projectImage
          projectTitle
          projectUrl
          techUsed {
            fontAwesomeIcon
          }
        }
      }
    }
  }
`
