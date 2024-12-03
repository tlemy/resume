import './App.css';
import data from './data.json';
import Banner from './Components/Banner.js';
import About from './Components/About.js';
import Navigation from './Components/Navigation.js';
import Resume from './Components/Resume.js';
import { useState } from 'react';

function App() 
{
  const [lang, setLanguage] = useState(0);
  const languages = ["en", "fr"];

  const [section, setSection] = useState(0);
  const sections = ["exp", "ope", "por", "edu"];

  const title = data.banner;
  const subtitle = data[languages[lang]].subtitle;

  return (
    <div className="App">
      <header className="App-header">
        <Banner title={title} subtitle={subtitle}/>
        <About data={data} lang={languages[lang]} setLanguage={setLanguage}/>
        <Navigation data={data} lang={languages[lang]} section={sections[section]} setSection={setSection}/>
        <Resume data={data} lang={languages[lang]} section={sections[section]}/>
      </header>
    </div>
  );
}

export default App;