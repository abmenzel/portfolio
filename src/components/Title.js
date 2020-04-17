import React from "react"
import styled from 'styled-components'
import { lighten, darken } from 'polished'
import Theme from '../styles/Theme'

const Title = styled.div`
    h2{
        text-transform:uppercase;
        margin-bottom:5px;
    }
    div{
        width: 60px;
        height: 7px;
        background-color: ${props => props.theme.colors.lightgreen};
        display:inline-block;
    }
`

export default (props) => (
    <Theme>
        <Title>
            <h2>{props.text}</h2>
            <div></div>
        </Title>
    </Theme>

)