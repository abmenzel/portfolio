import React from "react"
import styled from 'styled-components'
import { lighten } from 'polished'



const IconWrapper = styled.span`
    width:40px;
    height:40px;
    border-radius:50px;
    transition:0.1s ease-out;
    display:inline-block;
    position:relative;
    margin:0.5rem;
    background-color:transparent;
    &:hover{
        background-color:${props => lighten(.55, props.theme.colors.dark)};
        img{
            transform:scale(0.9);
            filter:invert(0);
        }
    }
`
const Icon = styled.img`
    filter:invert(1);
    opacity:0.8;
    transition:0.2s ease-out;
    padding:10px;
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
`

export default (props) => (
    <IconWrapper>
        <Icon src={props.src} alt={props.alt}/>
    </IconWrapper>
)