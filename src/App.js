import './App.css';
import data from './data.json';
import Banner from './Components/Banner.js';
import About from './Components/About.js';
import Navigation from './Components/Navigation.js';
import Resume from './Components/Resume.js';
import { useState } from 'react';

function App() 
{
  // TODO replace constants by enums
  const [lang, setLanguage] = useState("en");
  const [section, setSection] = useState("experiences");
  const title = data.banner;
  const subtitle = data[lang].subtitle;

  return (
    <div className="App">
      <header className="App-header">
        <Banner title={title} subtitle={subtitle}/>
        <About data={data} lang={lang} setLanguage={setLanguage}/>
        <Navigation data={data} lang={lang} section={section} setSection={setSection}/>
        <Resume data={data} lang={lang} section={section}/>
      </header>
    </div>
  );
}

export default App;