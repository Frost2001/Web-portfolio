import React, { Component } from 'react';
export default class Header extends Component {
render() {
let resumeData = this.props.resumeData;
return (
<React.Fragment>
<header id="home">
<nav id="nav-wrap">
<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
<a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
<ul id="nav" className="nav">
<li style={{color:'#4c4c4c', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 20}} className="current"><a className="smoothscroll" href="#home">Home</a></li>
<li style={{color:'#4c4c4c', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 20}}><a className="smoothscroll" href="#about">About</a></li>
<li style={{color:'#4c4c4c', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 20}}><a className="smoothscroll" href="#resume">Resume</a></li>
<li style={{color:'#4c4c4c', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 20}}><a className="smoothscroll" href="#projects">Projects</a></li>
<li style={{color:'#4c4c4c', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 20}}><a className="smoothscroll" href="#portfolio">Works</a></li>
<li style={{color:'#4c4c4c', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 20}}><a className="smoothscroll" href="#contact">Contact</a></li>
</ul>
</nav>
<div className="row banner">
<div className="banner-text">
<h1 style={{color:'#fff', fontFamily:'SimSun'}} className="responsive-headline"> Hey There! <br></br>I am </h1>
<h2 style={{color:'#F06000', fontFamily:'SimSun', fontSize:90}}>{resumeData.name}</h2>
<h3 style={{color:'#fff', fontFamily:'SimSun', fontSize:20}}><br></br>{resumeData.roleDescription}
</h3>
<hr/>
<ul className="social">
{
resumeData.socialLinks && resumeData.socialLinks.map(item =>{
return(
<li key={item.name}>
<a href={item.url} target=""><i className={item.className}></i></a>
</li>

)
}
)
}
</ul>
</div>
</div>
<p className="scrolldown">
<a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
</p>
</header>
</React.Fragment>
);
}
}