import './App.css';
import data from './data.json';
import Banner from './Components/Banner.js';

function App() 
{
  const title = data.banner;
  const subtitle = data.subtitle;

  return (
    <div className="App">
      <header className="App-header">
        <Banner title={title} subtitle={subtitle}/>
      </header>
    </div>
  );
}

export default App;