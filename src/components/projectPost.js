import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import projectPostStyles from "./projectPost.mod.scss"

export default ({
  projectTitle,
  projectUrl,
  projectImage,
  projectDescription,
  isOnLeft,
  techUsed,
}) => {
  console.log(techUsed)
  return (
    <div
      className={
        projectPostStyles.projectPostContainer +
        (isOnLeft ? " " + projectPostStyles.left : "")
      }
    >
      <img src={projectImage} />
      <div className={projectPostStyles.projectInfo}>
        <h1>{projectTitle}</h1>
        <p>{projectDescription}</p>

        <h4>Technology Used</h4>
        <div>
          {techUsed.map(tech => {
            console.log(tech.fontAwesomeIcon)
            return (
              <FontAwesomeIcon
                style={{ margin: "5px" }}
                icon={["fab", tech.fontAwesomeIcon]}
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
  )
}
