import React, { useEffect, useState } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Portfolio from './Components/Portfolio';

import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Portfolio data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
