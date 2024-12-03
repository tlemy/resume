import './Resume.css'
import Experience from './Experience';
import Volunteering from './Volunteering';
import Portfolio from './Portfolio';
import Education from './Education';

function Resume({data, lang, section}) 
{
    return (
        <div className="Resume">
            <Experience data={data} lang={lang} isSelected={section === "experiences"}/>
            <Volunteering data={data} lang={lang} isSelected={section === "volunteering"}/>
            <Portfolio data={data} lang={lang} isSelected={section === "portfolio"}/>
            <Education data={data} lang={lang} isSelected={section === "education"}/>
        </div>
    );
}

export default Resume;