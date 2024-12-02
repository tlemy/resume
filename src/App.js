import './App.css';
import data from './data.json';
import Banner from './Components/Banner.js';
import About from './Components/About.js';
import { useState } from 'react';

function App() 
{
  const [lang, setLanguage] = useState(0);
  const languages = ["en", "fr"];
  const title = data.banner;
  const subtitle = data[languages[lang]].subtitle;

  return (
    <div className="App">
      <header className="App-header">
        <Banner title={title} subtitle={subtitle}/>
        <About data={data} lang={languages[lang]} setLanguage={setLanguage}/>
      </header>
    </div>
  );
}

export default App;