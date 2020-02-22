import React from "react"

export default () => (
  <div
    style={{
      margin: "auto",
      paddingTop: "50px",
      width: "50vw",
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
      textAlign: "center",
    }}
  >
    <img
      style={{ width: "40%", height: "auto", margin: "auto" }}
      src={"/images/astro_404.png"}
    />
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <a href="/">Go Back Home</a>
  </div>
)
