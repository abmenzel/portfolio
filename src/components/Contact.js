import React from "react"
import styled from 'styled-components'
import { lighten, darken } from 'polished'
import Button from "../components/Button"

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    margin-bottom:5rem;
    padding:0 1.5rem;
    top:-115px;
    left:0;
    right:0;
    @media screen and (min-width:${props => props.theme.size.medium}){
        top:-65px;
    }
`
const Contact = styled.div`
    background-color:${props => lighten(0,props.theme.colors.lightgreen)};
    box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.05);
    text-align:center;
    padding:1rem 2rem;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width:800px;
    color:white;

    h3, p{
        color:${props => darken(.6, props.theme.colors.lightgreen)};
    }
    h3{
        font-weight:700;
    }
    p{
        font-size:0.9rem;
    }
    & > *{
        width:calc(100%/1);
        margin:0.5rem;
    }
    flex-direction:column;

    @media screen and (min-width:${props => props.theme.size.medium}){
        flex-direction:row;
        padding:2rem 1rem;
        & > *{
            width:calc(100%/3);
            margin:0 1rem;
        }
    }
`

export default () => (
    <Wrapper>
        <Contact>
            <h3>Have a project on your mind?</h3>
            <p>Let's talk about it.<br/>Coffee is on me</p>
            <Button label="Let's do it" linkType="external" link="mailto:alexander@menzel.dk" />
        </Contact>
    </Wrapper>    
)