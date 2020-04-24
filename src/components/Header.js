import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import Button from '../components/Button.js'
import { lighten } from 'polished'
import Theme from "../styles/Theme"

const Header = styled.header`
  padding:2rem;
  div{
    max-width:1344px;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  ul{
    margin:0;
  }
  li{
    margin:0;
  }
`

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      {props.type != "button" && <StyledLink to={props.to}>{props.children}</StyledLink> }
      {props.type == "button" && <Button type="primary" label={props.label} link={props.to} />}
  </li>
)

const StyledLink = styled(Link)`
  text-transform:uppercase;
  background:none;
  font-family:${props => props.theme.fonts.sans};
  font-size:0.75rem;
  letter-spacing:1px;
  font-weight:700;
  color:black;
  &:hover{
    color:${lighten(.3, "black")};
  }
`
export default () => {

    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
    return (
      <Theme>
        <Header>
          <div>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
            </Link>
            <nav>
              <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/about/">About</ListLink>
                <ListLink type="button" to="/#projects" label="Work" />
              </ul>
            </nav>
          </div>

        </Header>      
      </Theme>
    )
}

