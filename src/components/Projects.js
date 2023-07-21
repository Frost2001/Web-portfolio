import React, { Component } from 'react';
export default class Project extends Component {
render() {
    let resumeData = this.props.resumeData;
        return ( 
            
            <section id="projects" style={{backgroundColor: '#ebeeee', paddingTop:'50px'}}>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1 style={{color:'#1e1e1e', fontFamily:'SimSun', fontWeight: 'bold', fontSize:30}} > <span style={{textAlign: 'center'}}>PROJECTS</span></h1>
                        </div>
                        <div className="nine columns main-col">
                        {
                        resumeData.projects && resumeData.projects.map((item)=>{
                            return(
                                <div className="row item">
                                    <div className="twelve columns">
                                    <h3 style={{color:'#1e1e1e', fontFamily:'SimSun', fontWeight:'bold', fontSize: 25}}>{item.name}</h3>
                                        <p className="info" style={{fontFamily:'SimSun', color:'#1e1e1e', fontSize: 25}}>
                                        {item.description}
                                        </p>
                                        <p>
                                        <a href={item.url}>
                                        <button style={{fontFamily:'SimSun', fontWeight:'bold', fontSize:25}}  onclick="gotoLink(this)" value={item.url}>Medium Article</button>
                                        </a>
                                        </p>
                                        
                                    </div>
                                </div>
                                
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        )
    }
}