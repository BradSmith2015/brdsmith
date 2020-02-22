import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import projectPostStyles from "./projectPost.mod.scss"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              url
              path
              postType
              title
              description
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
              tech
            }
          }
        }
      }
    }
  `)
  let isLeft = true
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        isLeft = !isLeft
        return (
          <a href={node.frontmatter.url}>
            <div
              className={
                projectPostStyles.projectPostContainer +
                (isLeft ? " " + projectPostStyles.left : "")
              }
            >
              <Img
                className={projectPostStyles.imgStyles}
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              />
              <div className={projectPostStyles.projectInfo}>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.description}</p>

                <h4>Technology Used</h4>
                <div>
                  {node.frontmatter.tech.map(techs => {
                    return (
                      <FontAwesomeIcon
                        style={{ margin: "5px" }}
                        icon={["fab", techs]}
                      />
                    )
                  })}
                </div>
                <br />
                <h5>
                  VIEW PROJECT <span> › </span>
                </h5>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
