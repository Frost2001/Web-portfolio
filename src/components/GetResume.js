import React, { Component } from 'react';
export default class GetResume extends Component {
render() {
    return(
        <>
        <body style={{backgroundColor:'#1e1e1e'}}>
        <a href="https://docs.google.com/document/d/11RrKjoP0zlLVL6C6xPnITS5z3rC7OlMF/edit?usp=sharing&ouid=110510076274544517399&rtpof=true&sd=true">
        <button style={{ fontFamily: 'SimSun', fontWeight: 'bold', fontSize: 25 }} onclick="gotoLink(this)" value="https://docs.google.com/document/d/11RrKjoP0zlLVL6C6xPnITS5z3rC7OlMF/edit?usp=sharing&ouid=110510076274544517399&rtpof=true&sd=true">Get My Resume</button>
        </a>
        </body>
        </>
    
    )
}
}
