import React from "react"
import Layout from "../components/layout"
import ProjectPost from "../components/projectPost"
import indexStyles from "../styles/index.mod.scss"

export default ({ data }) => {
  let isLeft = true

  return (
    <div>
      <Layout>
        <div className={indexStyles.heroContainer}>
          <div className={indexStyles.heroText}>
            <h1 style={{ fontWeight: 900, lineHeight: "60px" }}>
              Hello there! I'm Brad - <br />
              I'm a Software Engineer
            </h1>
          </div>
          <div className={indexStyles.heroText}>
            <img src={"/images/Me.png"} className={indexStyles.heroImage} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "30px",
          }}
        >
          <p style={{ fontSize: "18px", width: "45%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.
            Sit amet mauris commodo quis imperdiet.
          </p>
          <p style={{ fontSize: "18px", width: "45%" }}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.
            Sit amet mauris commodo quis imperdiet.
          </p>
        </div>
        <div>
          <p style={{ fontSize: "18px", margin: "30px", width: "45%" }}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div style={{ marginTop: "150px" }}>
          <h1 style={{ margin: "80px 0" }}>Some of my Past Projects </h1>
          {data.allProjectsJson.edges.map(({ node }) => {
            isLeft = !isLeft
            return <ProjectPost key={node.id} isOnLeft={isLeft} {...node} />
          })}
        </div>
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
