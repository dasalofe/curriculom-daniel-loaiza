import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section1 from './components/section1';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionReferencias from './components/SectionReferencias';
import SectionContacto from './components/SectionContacto';

import React from 'react'

class App extends React.Component   {

  render() {
    return (
      <div className="App">
        <Header/>,
        <Section1/>,
        <SectionTwo/>,
        <SectionThree/>,
        <SectionReferencias/>,
        <SectionContacto/>,
        <Footer/>
      </div>
    )
  }
  
}

export default App;
