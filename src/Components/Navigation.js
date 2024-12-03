import './Navigation.css'

function Navigation({data, lang, section, setSection}) 
{
    const labels = data[lang].labels;

    return (
        <div className="Navigation">
            <div onClick={() => setSection("experiences")} className={`navItem nonSelectable ${section === "experiences" ? "selected" : "notSelected"}`}>{labels.exp}</div>
            <div onClick={() => setSection("volunteering")} className={`navItem nonSelectable ${section === "volunteering" ? "selected" : "notSelected"}`}>{labels.ope}</div>
            <div onClick={() => setSection("portfolio")} className={`navItem nonSelectable ${section === "portfolio" ? "selected" : "notSelected"}`}>{labels.por}</div>
            <div onClick={() => setSection("education")} className={`navItem nonSelectable ${section === "education" ? "selected" : "notSelected"}`}>{labels.edu}</div>
        </div>
    );
}

export default Navigation