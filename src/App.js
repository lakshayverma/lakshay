import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Job from './components/Job';

import resumeData from './resumeData';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData}/>
        <Job items={resumeData.portfolio} description={resumeData.portfolioDescription}  statsTitle="Technology Used"/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Job id="interests" title="Interests" items={resumeData.interests} description={resumeData.interestsDescription}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
