import React from "react"
import Button from "../components/Button"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

function routingCheck(e){ // Allows for external link inside wrapping router component
    if(e.target.tagName.toLowerCase() === "a" && e.target.host !== window.location.host){
        e.preventDefault();
        window.open(e.target.href);
    }
}

const Card = styled(Link)`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    overflow:hidden;
    background-color:white;
    border-radius:5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.05);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    color:initial;
    background-image:none;
    p{
        color:#555;
    }
    h3{
        text-transform:uppercase;
        font-weight:700;
        margin-top:0;
        margin-bottom:2px;
    }

    &:hover{
        transform:scale(1.01);
        box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05);
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

const ImgWrapper = styled(Img)`
    & > div{
        padding-bottom:56.25% !important;
    }
`


function ProjectCard(props) {
    return(
        <CardWrapper>
            <Card onClick={routingCheck} to={`/projects/${props.slug}`}>
                <ImgWrapper fluid={props.fluid} />
                <CardInner>
                    <h3>{props.title}</h3>
                    <Tag>{props.label}</Tag>
                    <summary dangerouslySetInnerHTML={{__html: props.excerpt}}></summary>
        {/*<Collaborator dangerouslySetInnerHTML={{__html: "In collaboration with " + props.collaborator}}></Collaborator>*/}
                    <div>
                        <Button type="primary"  label="View case" link={`/projects/${props.slug}`} />
                        {props.liveLink != "" && <Button label="Live demo" linkType="external" link={props.liveLink} />}
                    </div>

                </CardInner> 
            </Card>
        </CardWrapper>
    )
}

export default ProjectCard