import React from "react"
import Layout from "../components/Layout"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Button from '../components/Button'
import styled from 'styled-components'


const Wrapper = styled.div`
    align-items: center;
    display: flex;
    text-align:center;
    flex-direction:column;
    padding:2rem 0;
`

export default ({ data }) => (
<Layout>
    <Wrapper>
        <HelmetDatoCms />
        <h1>404 page not found.</h1>
        <p>That's not ideal. If this is a mistake please let me know.</p>
        <Button type="primary" link="/" label="BACK HOME"/>
    </Wrapper>
</Layout>
)