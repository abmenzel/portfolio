import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Title from "../components/Title"
import styled from 'styled-components'
import ProjectCard from "../components/ProjectCard"
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'

const Projects = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const Container = styled.div`
    text-align:${props => props.centered ? "center" : "left"};
    margin-bottom:25px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Intro = styled.div`
    margin-bottom:125px;

    & > div:last-child{
        max-width:600px;
        margin:0 auto;
    }
`

const ImgWrapper = styled(Img)`
    border-radius:50%;
    max-width:200px;
    max-height:200px;
    margin:0 auto;
`

export default ({ data }) => (
<Layout>
    <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} seo={data.datoCmsFrontpage.seoMetaTags} />
    <Container centered>
        <Intro>
            <ImgWrapper fluid={data.datoCmsFrontpage.image.fluid}/>
            <h1>{data.datoCmsFrontpage.introTitle}</h1>
            <div dangerouslySetInnerHTML={{__html: data.datoCmsFrontpage.introductionText}}></div>
        </Intro>

        <Title text={data.datoCmsFrontpage.workTitle}/>
    </Container>

    <Projects>
    {data.allDatoCmsWork.edges.map(({node: work }) => (
        <ProjectCard
        key={work.id}
        title={work.title}
        slug={work.slug}
        liveLink={work.liveLink} 
        label={work.tag} 
        excerpt={work.excerpt} 
        fluid={work.featuredImage.fluid}
        collaborator={work.collaborator} />
    ))}
    </Projects>
</Layout>
)

export const query = graphql`
    query IndexQuery {
        datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
        datoCmsFrontpage {
            introTitle
            introductionText
            workTitle
            seoMetaTags{
                ...GatsbyDatoCmsSeoMetaTags
              }
            image {
                fluid(maxWidth: 350, imgixParams: { fm: "jpg", auto: "compress" }) {
                    ...GatsbyDatoCmsSizes
                    }
                }
            }
        allDatoCmsWork {
            edges {
                node {
                id
                title
                tag
                slug
                liveLink
                excerpt
                collaborator
                featuredImage {
                    fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
                        ...GatsbyDatoCmsSizes
                        }
                    }
                }
            }
        }
    }
`