import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styled from 'styled-components'
import Theme from "../styles/Theme"
import { lighten } from 'polished'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

const Layout = styled.div`
    display:flex;
    flex-direction:column;
    min-height:100vh;
    background-color: #F5FAFB;
    a{
        text-shadow:none !important;
    }
    p a{
        background-image:linear-gradient(120deg,${props => lighten(.15, props.theme.colors.lightgreen)},${props => lighten(.15, props.theme.colors.lightgreen)});
        background-repeat: no-repeat;
        background-size: 100% .4em;
        background-position: 0 88%;
        color:hsla(0,0%,0%,0.8);
        transition:0.05s;
        &:hover{
            background-position:0 100%;
            background-size: 100% 0;
        }
    }
`
const Page = styled.div`
    flex:1;
    margin: 3rem auto;
    max-width: 1344px;
    width:100%;
    padding: 0 1rem;
`

export default ({ children }) => (
<Theme>
    <Layout>
        <HelmetDatoCms >
            <script src="https://config.metomic.io/config.js?id=prj:f00db288-5df8-4ef5-a74b-c499685902a3" crossorigin charset="utf-8"></script>
            <script src="https://consent-manager.metomic.io/embed.js" crossorigin charset="utf-8"></script>
            <meta name=" theme-color" content="#2f4858" />
            <html lang="en" />
        </HelmetDatoCms>
        <Header />
        <Page>
            {children}
        </Page>
        <Footer />
    </Layout>
</Theme>
)