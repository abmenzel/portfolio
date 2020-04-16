import React from "react"
import Button from "../components/Button"
import Img from 'gatsby-image'
import styled from 'styled-components'
import Theme from "../styles/Theme"

const Card = styled.article`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    background-color:white;
    border-radius:5px;
    box-shadow:  5px 5px 28px #dedede, 
    -5px -5px 28px #ffffff;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);


    h3{
        text-transform:uppercase;
        font-weight:700;
        margin-top:0;
        margin-bottom:2px;
    }
`
const Tag = styled.div`
    text-transform:uppercase;
    font-family:${props => props.theme.fonts.sans};
    letter-spacing:1px;
    font-size:0.75rem;
    margin-bottom:0.5rem;
`
const CardWrapper = styled.div`
    display:flex;
    padding:1rem 0.5rem;
    width:100%;
    @media screen and (min-width:769px){
        padding:1rem;
        width:50%;
    }
    @media screen and (min-width:1200px){
        width:33%;
    }
`
const CardInner = styled.div`
    padding:1.25rem;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    summary{
        flex-grow:1;
    }
`

const Collaborator = styled.div`
    display:flex;
    color:#777;
    font-size:0.85rem;
    a{
        color:#777;
        background-image:none;
        margin-left:5px;

        &:hover{
            color:${props => props.theme.colors.green};;
        }
    }
`
const ImgWrapper = styled(Img)`
    & > div{
        padding-bottom:56.25% !important;
    }
`


function ProjectCard(props) {
    return(
    <Theme>
        <CardWrapper>
            <Card>
                <ImgWrapper fluid={props.fluid} />
                <CardInner>
                    <h3>{props.title}</h3>
                    <Tag>{props.label}</Tag>
                    <summary dangerouslySetInnerHTML={{__html: props.excerpt}}></summary>
        {/*<Collaborator dangerouslySetInnerHTML={{__html: "In collaboration with " + props.collaborator}}></Collaborator>*/}
                    <div>
                        <Button type="primary" label="View case" link={`/projects/${props.slug}`}></Button>
                        <Button label="Live demo"  link="/test"></Button>
                    </div>

                </CardInner>
            </Card>
        </CardWrapper>
    </Theme>

    )
}

export default ProjectCard