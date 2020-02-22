import React from "react"

import skillsStyles from "./skills.mod.scss"

const TableBulletPoint = ({ children }) => (
  <td>
    <span>&#x25A1;</span>
    {children}
  </td>
)
export default () => (
  <div className={skillsStyles.skillsTable}>
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
)
