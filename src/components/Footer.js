import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { lighten, darken } from 'polished'
import Theme from "../styles/Theme"
import Button from "../components/Button"
import Icon from "../styles/Icon"
import Contact from "../components/Contact"

const Footer = styled.footer`
  margin-top:5rem;
  background-color:#2F4858;
  padding: 8rem 0 2rem;
  color:${props => lighten(.55, props.theme.colors.dark)};
  text-align:center;
  position:relative;
  @media screen and (min-width:${props => props.theme.size.medium}){
    padding:7rem 0 2rem;
  }
  a{
    color:${props => lighten(.55, props.theme.colors.dark)};
    text-decoration:none;
    border:none;
    background-image:none;
  }
`
const Copyright = styled.p`
  font-size:0.8rem;

`

const Socials = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  a{
    margin:0;
  }
`

const Social = (props) => {
  return <a href={props.to} target="_blank"><Icon src={props.src} alt={props.alt} /></a>
}

export default () => {
    const data = useStaticQuery(
        graphql`
          query {
                datoCmsFooter {
                    contact 
                    copyright
                }
                allDatoCmsSocial {
                  edges {
                      node {
                      id
                      url
                      site
                      icon{
                        url
                      }
                  }
              }
          }
        }
        `
      )
    return (
      <Theme>
        <Footer>
          <Contact className="contactWrapper"/>
          <div dangerouslySetInnerHTML={{__html: data.datoCmsFooter.contact}}></div>
          <Socials>
          {data.allDatoCmsSocial.edges.map(({node: social }) => (
            <Social 
              to={social.url} src={social.icon.url} alt={social.site}
            />
          ))}
          </Socials>
          <Copyright>{data.datoCmsFooter.copyright}</Copyright>
        </Footer>
      </Theme>
    )
}