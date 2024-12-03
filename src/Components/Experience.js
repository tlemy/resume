import './Experience.css'

function Experience({data, lang, isSelected}) 
{
    const experiences = data[lang].experiences;

    return (
      <div className={`${isSelected ? "Experience" : "invisible"}`}>
        {
            experiences.map((job, index) => (
                <div key={index} className='experienceListItem'>
                   <div className='titleItem'>
                      <p className='square'></p>
                      <h2 className="title">{job.title}</h2>
                  </div>
                  {
                    job.points.map((point, index2) => (
                      <div key={index2} className='description'>
                        <p className='subSquare'></p>
                        <div className='point'>{point}</div>
                      </div>
                    ))
                  }
                </div>
            ))
        }
      </div>  
    );
}

export default Experience;