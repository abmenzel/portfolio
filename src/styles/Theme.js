import React from "react"
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        green: "#1ca086",
        lightgreen: "#7DEBA9"
    },
    fonts: {
        sans: "Montserrat"
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
