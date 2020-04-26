import React from "react"
import styled from 'styled-components'

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
        <Title id="projects">
            <h2>{props.text}</h2>
            <div></div>
        </Title>

)