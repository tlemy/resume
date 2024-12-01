import './Banner.css';

function Banner({title, subtitle}) 
{
  return (
      <div className="Banner">
        {title.map((line, index) => ( <pre key={index} className='bannerLine'>{line}</pre> ))}
        <p className="typewriter" >{subtitle}</p>
      </div>
  );
}

export default Banner;