import './Education.css'

function Education({data, lang, isSelected}) 
{
    const academics = data[lang].academics;

    return (
      <div className={`section ${isSelected ? "Education" : "invisible"}`}>
        {
            academics.map((record, index) => (
                <div className='listItem' key={index}>
                   <div className='titleItem'>
                      <p className='square'></p>
                      <h2 className="title">{record.title}</h2>
                  </div>
                  <div className='tags'>
                    {
                      record.tags.map((tag, index3) => (
                        <div key={index3} className='tag'>{tag}</div>
                      ))
                    }
                  </div>
                </div>
            ))
        }
      </div>  
    );
}

export default Education;