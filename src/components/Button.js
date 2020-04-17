import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { lighten, darken } from 'polished'
import Theme from '../styles/Theme'

const StyledButton = styled(Link)`
    color:${props => (props.type == "primary") ? darken(.6, props.theme.colors.lightgreen) : "#333"};
    text-transform:uppercase;
    letter-spacing:1px;
    font-weight:700;
    text-shadow:none;
    background-image:none;
    padding:0.45rem 0.55rem;
    margin-right:0.5rem;
    border-radius:5px;
    text-decoration:none;
    font-family:${props => props.theme.fonts.sans};
    font-size:0.75rem;
    background-color:${props => (props.type == "primary") ? props.theme.colors.lightgreen : "white"};
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{
        color:initial;
        background-color:${props => (props.type == "primary") ? lighten(.05, props.theme.colors.lightgreen) : darken(.06, "white")};
    }
`

export default (props) => (
    <Theme>
        {props.linkType != "external" && <StyledButton type={props.type} to={props.link}>{props.label}</StyledButton>}
        {props.linkType == "external" && <StyledButton as="a" type={props.type} href={props.link}>{props.label}</StyledButton>}
    </Theme>
)