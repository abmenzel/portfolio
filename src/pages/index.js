import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Title from "../components/Title"
import styled from 'styled-components'
import ProjectCard from "../components/ProjectCard"
import Img from 'gatsby-image'

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
`
const ImgWrapper = styled(Img)`
    border-radius:50%;
    max-width:200px;
    max-height:200px;
    margin:0 auto;
`

export default ({ data }) => (
<Layout>
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
        datoCmsFrontpage {
            introTitle
            introductionText
            workTitle
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