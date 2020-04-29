import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import styled from 'styled-components'
import { darken } from 'polished'
import { HelmetDatoCms } from 'gatsby-source-datocms'

const TopRow = styled.div`
  max-width:1080px;
  margin:0 auto;
  padding:0 0.5rem;
`

const Skills = styled.div`
  display:flex;
  max-width:1200px;
  margin:1rem auto;
  flex-direction:column;
  @media screen and (min-width:${props => props.theme.size.medium}){
    flex-direction:row;
    margin:5rem auto;
  }
`

const Skill = styled.div`
  text-align:center;
  background-color:white;
  border-radius:5px;
  padding:0.2rem 1.5rem;
  margin:0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.05);
  @media screen and (min-width:${props => props.theme.size.medium}){
    width:calc(100%/3);
    margin:0 0.75rem;
  }
  h2{
    font-size:1.2rem;
    font-weight:700;
    margin:0 0 2rem;
    max-height:26px;
  }
  h4{
    font-size:0.9rem;
  }
  p{
    font-size:0.9rem;
  }
  img{
    margin:1rem 0 0.25rem;
    max-width:100px;
  }
`

const SkillIcon = (props) => {
  return <img src={props.src} alt="" />
}

const About = ({ data }) => (
  <Layout>
      <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} seo={data.datoCmsAbout.seoMetaTags} />
      <TopRow>
        <div dangerouslySetInnerHTML={{__html: data.datoCmsAbout.title}} />
      </TopRow>
      <Skills>
        {
          data.datoCmsAbout.skills.map((skill) => (
            <Skill key={skill.id}>
              <SkillIcon src={skill.icon.url}/>
              <h2>{skill.title}</h2>
              <div dangerouslySetInnerHTML={{__html: skill.skills}}/>
            </Skill>
          ))
        }
      </Skills>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    datoCmsAbout {
      seoMetaTags{
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      skills {
        ... on DatoCmsSkillset {
          model { apiKey }
          id
          title
          skills
          icon {
            url
          }
        }
      }
    }
  }
`