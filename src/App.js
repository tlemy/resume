import './App.css';
import data from './data.json';
import Banner from './Components/Banner.js';
import About from './Components/About.js';

function App() 
{
  const languages = ["en", "fr"];
  let selectedLanguage = 0;

  const title = data.banner;
  const subtitle = data.subtitle;
  const icon = data.icon;
  const email = data.email;
  const skills = data.skills;
  const labels = data[languages[selectedLanguage]].labels;
  const others = data[languages[selectedLanguage]].moreInfo;

  return (
    <div className="App">
      <header className="App-header">
        <Banner title={title} subtitle={subtitle}/>
        <About icon={icon} email={email} skills={skills} labels={labels} others={others}/>
      </header>
    </div>
  );
}

export default App;