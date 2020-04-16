import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Title from "../components/Title"
import styled from 'styled-components'
import ProjectCard from "../components/ProjectCard"

const Projects = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export default ({ data }) => (
<Layout>
    <div>
        <h1>{data.datoCmsFrontpage.introTitle}</h1>
        <div dangerouslySetInnerHTML={{__html: data.datoCmsFrontpage.introductionText}}></div>
    </div>

    <Title text={data.datoCmsFrontpage.workTitle}/>
    <Projects>
    {data.allDatoCmsWork.edges.map(({node: work }) => (
        <ProjectCard 
        title={work.title}
        slug={work.slug} 
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
            }
        allDatoCmsWork {
            edges {
                node {
                id
                title
                tag
                slug
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