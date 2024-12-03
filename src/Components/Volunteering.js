import './Volunteering.css'

function Volunteering({data, lang, isSelected}) 
{
    const contributions = data[lang].contributions;

    return (
      <div className={`${isSelected ? "Volunteering" : "invisible"}`}>
        {
            contributions.map((contribution, index) => (
                <div key={index}>
                   <div className='titleItem'>
                      <p className='square'></p>
                      <h2 className="title">{contribution.title}</h2>
                  </div>
                  {
                    contribution.pullRequests.map((pr, index2) => (
                      <div key={index2} className='description'>
                        <p className='subSquare'></p>
                        <div className='point'>{pr.description}</div>
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