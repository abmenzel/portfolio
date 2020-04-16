import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { lighten, darken } from 'polished'
import Theme from "../styles/Theme"

const Footer = styled.footer`
  background-color: ${props => props.theme.colors.lightgreen};
  padding: 2rem 0;
  color:${props => darken(.55, props.theme.colors.lightgreen)};
  text-align:center;

  a{
    color:${props => darken(.55, props.theme.colors.lightgreen)};
    text-decoration:none;
    border:none;
    background-image:none;
  }
`

const Copyright = styled.p`
  font-size:0.8rem;

`

export default () => {
    const data = useStaticQuery(
        graphql`
          query {
                datoCmsFooter {
                    contact 
                    copyright
                }
          }
        `
      )
    return (
      <Theme>
        <Footer>
          <div dangerouslySetInnerHTML={{__html: data.datoCmsFooter.contact}}></div>
          <Copyright>{data.datoCmsFooter.copyright}</Copyright>
        </Footer>
      </Theme>
    )
}