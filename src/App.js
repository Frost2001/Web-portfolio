import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Contact from './components/Contact';
import Project from './components/Projects';
import GetResume from'./components/GetResume';
class App extends Component {
render() {
return (
<div className="App">
<Header resumeData={resumeData}/>
<About resumeData={resumeData}/>
<Resume resumeData={resumeData}/>
<Project resumeData={resumeData}/>
<GetResume />
<Portfolio resumeData={resumeData}/>
<Contact />
<Footer resumeData={resumeData}/>
</div>
);
}
}
export default App;