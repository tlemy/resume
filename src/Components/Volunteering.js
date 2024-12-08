import './Volunteering.css'

function Volunteering({data, lang, isSelected}) 
{
    const contributions = data[lang].contributions;

    return (
      <div className={`section ${isSelected ? "Volunteering" : "invisible"}`}>
        {
            contributions.map((contribution, index) => (
                <div className='listItem' key={index}>
                  <div className='titleItem'>
                      <p className='square'></p>
                      <h2 className="title">{contribution.title}</h2>
                  </div>
                  <div className='tags'>
                    {
                      contribution.tags.map((tag, index3) => (
                        <div key={index3} className='tag'>{`[${tag}]`}</div>
                      ))
                    }
                  </div>
                  {
                    contribution.pullRequests.map((pr, index2) => (
                      <div key={index2} className='description'>
                        <p className='subSquare'></p>
                        <div className='point'>
                            <div>
                              {pr.description}
                            </div>
                            <a href={pr.url} target="_blank" rel="noreferrer">
                              <button className='gitButton'>github</button>
                            </a>
                        </div>
                      </div>
                    ))
                  }
                </div>
            ))
        }
      </div>  
    );
}

export default Volunteering;