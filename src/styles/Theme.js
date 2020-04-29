import React from "react"
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        green: "#1ca086",
        lightgreen: "#94ECBE", //earlier: #7DEBA9
        dark: "#2F4858"
    },
    fonts: {
        sans: "'Montserrat',sans-serif"
    },
    size: {
        medium: "768px"
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
