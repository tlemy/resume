import Experience from './Experience';
import './Resume.css'
import Volunteering from './Volunteering';

function Resume({data, lang, section}) 
{
    return (
        <div className="Resume">
            <Experience data={data} lang={lang} isSelected={section === "experiences"}/>
            <Volunteering data={data} lang={lang} isSelected={section === "volunteering"}/>
        </div>
    );
}

export default Resume;