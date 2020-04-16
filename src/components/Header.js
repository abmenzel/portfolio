import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { darken } from 'polished'
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
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

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
        <Header>
          <div>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
            </Link>
            <nav>
              <ul style={{ listStyle: `none`, float: `right` }}>
                  <ListLink to="/">Work</ListLink>
                  <ListLink to="/about/">About</ListLink>
              </ul>
            </nav>
          </div>

        </Header>
    )
}

