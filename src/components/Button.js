import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { lighten, darken } from 'polished'
const StyledButton = styled(Link)`
    color:${props => (props.type == "primary") ? darken(.6, props.theme.colors.lightgreen) : "#333"} !important;
    text-transform:uppercase;
    letter-spacing:1px;
    font-weight:700;
    text-shadow:none;
    background-image:none;
    padding:0.45rem 0.55rem;
    margin-right:0.5rem;
    border-radius:5px;
    text-decoration:none;
    font-size:0.75rem;
    background-color:${props => (props.type == "primary") ? props.theme.colors.lightgreen : "white"};
    box-shadow:${props => (props.shadow) ? "0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05)" : "none"};
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover{
        color:initial;
        background-color:${props => (props.type == "primary") ? lighten(.05, props.theme.colors.lightgreen) : darken(.06, "white")};
    }
`

export default (props) => (
    <span>
        {props.linkType != "external" && <StyledButton className="sans btn" type={props.type} shadow={props.shadow} to={props.link}>{props.label}</StyledButton>}
        {props.linkType == "external" && <StyledButton className="sans btn" as="a" type={props.type} shadow={props.shadow} rel="noopener" target="_blank" href={props.link}>{props.label}</StyledButton>}
    </span>
)