import React from 'react'
import Img from 'gatsby-image'
import Video from '../components/Video'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import styled from 'styled-components'
import { lighten } from 'polished'
import { HelmetDatoCms } from 'gatsby-source-datocms'


const Tag = styled.div`
    text-transform:uppercase;
    letter-spacing:1px;
    font-size:0.75rem;
    margin-bottom:0.5rem;
    margin-right:0.5rem;
`

const ImgWrapper = styled(Img)`
  width:100%;
    & > div{
        padding-bottom:56.25% !important;
    }
    @media screen and (min-width:${props => props.theme.size.medium}){
    width:calc(100% * 2/3);
    /*box-shadow:0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05);*/
  }
`
const VideoWrapper = styled.div`
  width:100%;
  @media screen and (min-width:${props => props.theme.size.medium}){
    width:calc(100% * 2/3);
    /*box-shadow:0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05);*/
  }
`

const TopRow = styled.div`
  display:flex;
  flex-direction:column;

  @media screen and (min-width:${props => props.theme.size.medium}){
    flex-direction:row;
  }
`

const ProjectInfo = styled.div`
  width:100%;
  padding-right:25px;

  @media screen and (min-width:${props => props.theme.size.medium}){
    width:calc(100% * 1/3);
  }
`
const Title = styled.h1`
  text-transform:uppercase;
  font-weight:700;
  line-height:2rem;
  margin-top:0;
  margin-bottom:1rem;
  @media screen and (min-width:${props => props.theme.size.medium}){
    margin-top:2rem;
  }
`

const Collaborator = styled.div`
    display:flex;
    font-size:0.85rem;
    line-height:1.6rem;
    a{
        color:${lighten(.3,"black")};
        background-image:none !important;
        transition:0.2s ease-in-out;
        background-color:${lighten(.6,"#555")};
        padding:4px 8px;
        border-radius:5px;
        white-space: nowrap;
        &:hover{
            background-color:${lighten(.55,"#555")};
            color:black;
        }
    }
`
const ProjectMeta = styled.div`
  display:flex;
`

const Date = styled(Tag)``

const Expanded = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin-top:0.75rem;
  margin-left:-1.5rem;
  @media screen and (min-width:${props => props.theme.size.medium}){
    margin-top:4rem;
  }
`

const BlockWrapper = styled.div`
  width:100%;
  padding:0.75rem 0;
  padding-left:1.5rem;
  @media screen and (min-width:${props => props.theme.size.medium}){
    width:${props => 100/props.col + "%"};
  }
`

function Block(props) {
  if(props.type == "image"){
    return <Img fluid={props.src} />
  }else if (props.type == "video"){
    return <Video src={props.src} />
  }
}


export default ({ data }) => (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <TopRow>
        <ProjectInfo>
          <Title>{data.datoCmsWork.title}</Title>
          <ProjectMeta>
            <Tag>{data.datoCmsWork.tag}</Tag>
            <Date>{data.datoCmsWork.date}</Date>
          </ProjectMeta>
          <Collaborator dangerouslySetInnerHTML={{__html: data.datoCmsWork.collaborator}}></Collaborator>
          <div dangerouslySetInnerHTML={{__html: data.datoCmsWork.description}}></div>
        </ProjectInfo>
        {data.datoCmsWork.featuredVideo ? <VideoWrapper><Video src={data.datoCmsWork.featuredVideo.url}/></VideoWrapper> : <ImgWrapper fluid={data.datoCmsWork.featuredImage.fluid}/>}
      </TopRow>
      <Expanded>
        {
          data.datoCmsWork.expanded.map((block) => (
            <BlockWrapper key={block.id} col={block.perRow}>
              {block.model.apiKey == 'mediaholder' && block.video && <Block type="video" src={block.video.url} />}
              {block.model.apiKey == 'mediaholder' && block.media && <Block type="image" src={block.media.fluid} />}
            </BlockWrapper>
          ))
        }
      </Expanded>
    </Layout>
  )
  export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      title
      tag
      slug
      date
      liveLink
      excerpt
      collaborator
      description
      seoMetaTags{
        ...GatsbyDatoCmsSeoMetaTags
      }
      expanded {
        ... on DatoCmsMediaholder {
          model { apiKey }
          id
          perRow
          media {
            fluid(maxWidth: 1000, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
              }
          }
          video {
            url
          }
        }
      }
      featuredVideo{
        url
      }
      featuredImage {
          fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
              }
          }
      }
    }
  
`