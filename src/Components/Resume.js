import Experience from './Experience';
import './Resume.css'

function Resume({data, lang, section}) 
{
    console.log(section);
    return (
        <div className="Resume">
            {getSection(data, lang, section)}
        </div>
    );
}

function getSection(data, lang, section) {
    if (section === "exp") return <Experience data={data} lang={lang}/>
}

export default Resume;