import React from 'react'
import styled from 'styled-components'

const embedString = (watchString) => (
    watchString.replace('/watch?v=', '/embed/')
)

const VideoWrapper = styled.div`
    position:relative;
    padding-bottom:56.25%;
    width:100%;
    height:0;

    iframe{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
`

export default (props) => (
        <VideoWrapper>
            <iframe
            src={embedString(props.src) + "?rel=0"}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </VideoWrapper>
)