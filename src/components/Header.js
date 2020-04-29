import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import Button from '../components/Button.js'
import { lighten } from 'polished'
import Layout from "../components/Layout"


const Header = styled.header`
  div{
    padding:2rem 1rem;
    max-width:1344px;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  @media screen and (max-width:440px){
    h3{
      font-size:0.8rem;
    }
  }
  ul{
    margin:0;
    @media screen and (max-width:440px){
      a{
        font-size:0.6rem;
      }
    }
    a{
      margin:0;
    }
  }
`

const ListLink = props => (
  <StyledLi>
      {props.type != "button" && <StyledLink className="sans btn" to={props.to}>{props.children}</StyledLink> }
      {props.type == "button" && <Button shadow="true" type="primary" label={props.label} link={props.to} />}
  </StyledLi>
)
const StyledLi= styled.li`
  display:inline-block;
  margin-right:1rem;
  margin-bottom:0;
  &:last-child{
    margin-right:0;
  }
`
const StyledTitle = styled(Link)`
  background:none;
  font-size:0.75rem;
  font-weight:600;
  color:black;
`
const StyledLink = styled(Link)`
  text-transform:uppercase;
  background:none;
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
      <Header>
        <div>
          <StyledTitle to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
          </StyledTitle>
          <nav>
            <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/about/">About</ListLink>
              <ListLink type="button" to="/#projects" label="Work" />
            </ul>
          </nav>
        </div>

      </Header>      
    )
}

