import Typography from "typography"
import fairyTheme from "typography-theme-fairy-gates"

fairyTheme.headerFontFamily = ["Montserrat"]


const typography = new Typography(fairyTheme)


export const { scale, rhythm, options } = typography
export default typography