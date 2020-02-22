import Typography from "typography"
import "../styles/global.css"
import fairyGatesTheme from "typography-theme-fairy-gates"
fairyGatesTheme.overrideStyles = () => ({
  p: {
    color: "#808080		",
  },
  a: {
    textDecoration: "none",
  },
})
const typography = new Typography(fairyGatesTheme)

typography.headerFontFamily = ["Open Sans", "sans-serif"]
typography.headerWeight = 800

export default typography
export const rhythm = typography.rhythm
