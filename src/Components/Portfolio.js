import './Portfolio.css'

function Portfolio({data, lang, isSelected}) 
{
    const projects = data[lang].projects;

    return (
      <div className={`section ${isSelected ? "Portfolio" : "invisible"}`}>
        {
            projects.map((project, index) => (
                <div className='listItem' key={index}>
                  <div className='titleItem'>
                      <p className='square'></p>
                      <h2 className="title">{project.title}</h2>
                  </div>
                  <div className='tags'>
                    {
                      project.tags.map((tag, index3) => (
                        <div key={index3} className='tag'>{`[${tag}]`}</div>
                      ))
                    }
                  </div>
                  {
                    project.points.map((point, index2) => (
                      <div key={index2} className='description'>
                        <p className='subSquare'></p>
                        <div className='point'>
                            <div>
                              {point}
                            </div>
                        </div>
                      </div>
                    ))
                  }
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <button className='projectButton'>github</button>
                  </a>
                  { (project.demo !== "") ?
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <button className='projectButton'>demo</button>
                    </a> : <div></div>
                  }
                </div>
            ))
        }
      </div>  
    );
}

export default Portfolio;