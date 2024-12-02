import "./About.css"

function About({icon, email, skills, labels, others}) {
    return (
        <div className="About">
            <div className="logo">
                {icon.map((line, index) => ( <pre className="computerLine" key={index} dangerouslySetInnerHTML={{__html: line}}/> ))}
            </div>
            <div className="informations">
                <div className="email informationItem">
                    <p className="label">{labels.email}</p>
                    <div className="text">
                        <pre className="subText">{email}</pre>
                    </div>
                </div>
                <div className="progLangs informationItem">
                    <p className="label">{labels.progLangs}</p>
                    <div className="text">
                        {skills.progLangs.map((item, index) => { return <pre className="subText" key={index}>{item + ", " }</pre>})}
                    </div>
                </div>
                <div className="tools informationItem">
                    <p className="label">{labels.tools}</p>
                    <div className="text">
                        {skills.tools.map((item, index) => { return <pre className="subText" key={index}>{item + ", "}</pre> })}
                    </div>
                </div>
                <div className="env informationItem">
                    <p className="label">{labels.env}</p>
                    <div className="text">
                        {skills.env.map((item, index) => { return <pre className="subText" key={index}>{item + ", "}</pre> })}
                    </div>
                </div>
                <div className="spokenLangs informationItem">
                    <p className="label">{labels.spokenLangs}</p>
                    <div className="text">
                        {others.spokenLangs.map((item, index) => { return <pre className="subText" key={index}>{item + ", "}</pre> })}
                    </div>
                </div>
                <div className="interests informationItem">
                    <p className="label">{labels.interests}</p>
                    <div className="text">
                        {others.interests.map((item, index) => { return <pre className="subText" key={index}>{item + ", "}</pre> })}
                    </div>
                </div>
            </div>
        </div>  
    );
} 

export default About