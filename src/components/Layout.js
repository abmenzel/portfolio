import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styled from 'styled-components'
import main from "../styles/_main.scss"

const Layout = styled.div`
    display:flex;
    flex-direction:column;
    min-height:100vh;
    background-color: #F5FAFB;
`
const Page = styled.div`
    flex:1;
    margin: 3rem auto;
    max-width: 1344px;
    width:100%;
    padding: 0 1rem;
`

export default ({ children }) => (

<Layout>
    <Header />
    <Page>
        {children}
    </Page>
    <Footer />
</Layout>
)