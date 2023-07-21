import React, { Component } from 'react';
export default class About extends Component {
render() {
let resumeData = this.props.resumeData;
return (
    <section id ='about' style={{backgroundColor: '#1e1e1e'}}>
        <div className ='row'>
        <div className ='three columns'>
        <img className ='profile-pic' src='images/profile-pic.png' alt='' />
            </div>
            <div className ='nine columns main-col'>
            <h2 style={{color: '#F06000', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 40}} > About Me</h2>
            <p style={{color:'#e5e5e5', fontFamily:'SimSun',fontSize: 25}}>
                {
                resumeData.aboutme
                }
            </p>
            <div className ='row'>
            <div className = 'columns contact-details'>
            <h2 style={{color: '#F06000', fontFamily:'SimSun', fontWeight: 'bold', fontSize: 25}} >Contact Details</h2>
            <p style={{color:'#e5e5e5', fontFamily:'SimSun',fontSize: 15}} className ='address'>
            <span>{resumeData.name}</span>
            <br></br>
            <span>{resumeData.contact} </span>
            <br></br>
            <span>
                {resumeData.email}
            </span>
            <br></br>
            <span>{resumeData.address}</span>
            </p>
           </div>
          </div>
      </div>
    </div>
</section>
);
}
}