import './Navigation.css'

function Navigation({data, lang, section, setSection}) 
{
    const labels = data[lang].labels;

    return (
        <div className="Navigation">
            <div onClick={() => setSection(0)} className={`navItem nonSelectable ${section === "exp" ? "selected" : "notSelected"}`}>{labels.exp}</div>
            <div onClick={() => setSection(1)} className={`navItem nonSelectable ${section === "ope" ? "selected" : "notSelected"}`}>{labels.ope}</div>
            <div onClick={() => setSection(2)} className={`navItem nonSelectable ${section === "por" ? "selected" : "notSelected"}`}>{labels.por}</div>
            <div onClick={() => setSection(3)} className={`navItem nonSelectable ${section === "edu" ? "selected" : "notSelected"}`}>{labels.edu}</div>
        </div>
    );
}

export default Navigation