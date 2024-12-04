import './Experience.css'

function Experience({data, lang, isSelected}) 
{
    const experiences = data[lang].experiences;
    const labels = data[lang].labels;

    return (
      <div className={`section ${isSelected ? "Experience" : "invisible"}`}>
        {
            experiences.map((job, index) => (
                <div key={index} className='experienceListItem'>
                  <div className='titleItem'>
                      <p className='square'></p>
                      <h2 className="title">{job.title}</h2>
                  </div>
                  <div className='tags'>
                    <div className='tag'>{`${calculateYoe(job.startDate, job.endDate)} ${labels.years}`}</div>
                    {
                      job.tags.map((tag, index3) => (
                        <div key={index3} className='tag'>{tag}</div>
                      ))
                    }
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

function calculateYoe(start, end) 
{
  const startDate = new Date(start);
  const endDate = new Date();
  const diff = endDate.getFullYear() - startDate.getFullYear();

  return diff;
}

export default Experience;