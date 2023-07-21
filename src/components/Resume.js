import React, { Component } from 'react';
export default class Resume extends Component {
render() {
let resumeData = this.props.resumeData;
return (
<section id="resume" style={{backgroundColor: '#1e1e1e'}}>
<div className="row education">
<div className="three columns header-col">
<h1 style={{color:'#fff', fontFamily:'SimSun', fontWeight: 'bold', fontSize:25}} > <span>Education</span></h1>
</div>
<div className="nine columns main-col">
{
resumeData.education && resumeData.education.map((item)=>{
return(
<div className="row item">
<div className="twelve columns">
<h3 style={{color:'#fff', fontFamily:'SimSun'}}>{item.UniversityName}</h3>
<p className="info">
{item.specialization}
<span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
<p>
{item.Achievements}
</p>
</div>
</div>
)
})
}
</div>
</div>
<div className="row work">
<div className="three columns header-col">
<h1 style={{color:'#fff', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 25}}><span>Work Experience</span></h1>
</div>
<div className="nine columns main-col">
{
resumeData.work && resumeData.work.map((item) => {
return(
<div className="row item">
<div className="twelve columns">
<h3 style={{color:'#fff', fontFamily:'SimSun'}}>{item.CompanyName}</h3>
<p className="info">
{item.specialization}
<span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
<p>
{item.Achievements}
</p>
</div>
</div>
)
})
}
</div>
</div>
<div className="row certifications">
<div className="three columns header-col">
<h1 style={{color:'#fff', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 25}}><span>Certifications</span></h1>
</div>
<div className="nine columns main-col">
{
resumeData.certifications && resumeData.certifications.map((item) => {
return(
<div className="row item">
<div className="twelve columns">
<h3 style={{color:'#fff', fontFamily:'SimSun'}}>{item.CourseName}</h3>
<p className="info">
{item.specialization}
<span>&bull;</span> <em className="date">{item.DateOfCompletion}</em></p>
<p>
{item.Achievements}
</p>
</div>
</div>
)
})
}
</div>
</div>
<div className="row skill">
<div className="three columns header-col">
<h1 style={{color:'#fff', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 25}}><span>Skills</span></h1>
</div>
<div className="nine columns main-col">
<p>
{resumeData.skillsDescription}
</p>
<div className="bars">
<ul className="skills">
{
resumeData.skills && resumeData.skills.map((item) => {
return(
<li>
<span className={`bar-expand ${item.skillname.toLowerCase()}`}>
</span><em style={{color:'#fff',fontFamily: 'SimSun', fontWeight: 'bold', fontSize:20}}>{item.skillname}</em>
</li>

)
})
}
</ul>
</div>
</div>
</div>
</section>
);
}
}