import './Experience.css'

function Experience({data, lang}) 
{
    const experiences = data[lang].experiences;

    return (
      <div className="Experience">
        {
            experiences.map((job, index) => (
                <div key={index} className='jobTitleItem'>
                    <p className='square'></p>
                    <h2 className="jobTitle">{job.title}</h2>
                </div>
            ))
        }
      </div>  
    );
}

export default Experience;