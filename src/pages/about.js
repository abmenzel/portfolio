import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const About = ({ data: { datoCmsAbout } }) => (
<Layout>
    <p>{datoCmsAbout.title}</p>
</Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    datoCmsAbout {
      title
    }
  }
`