import './exhibition-card.styles.scss'

const ExhibitionCard = ({artworker}) => {
  return(
    <div className='card-container'>
      <img className='img' src={artworker.images?.web.url} alt={artworker.title} />
      <div className='card-body-container'>
        {artworker.creators && (
        <div>
          {artworker.creators.map((creator, creatorIndex) => (
            <div key={creatorIndex}>
              <h2 className='card-description'>{creator.description}</h2>
            </div>
          ))}
        </div>
      )} 

        <h3>{artworker.title}</h3>
          <div>
            <span>{artworker.culture}</span>
          </div>
          <div className='technique'>
            <span className='technique-label'>Technique: </span>
            <span className='technique-value'>{artworker.technique}</span>
          </div>
          <div>
            <span>{artworker.creditline}</span>
          </div>
          <br/>
          <div className='didyouknow'>
            <span className='didyouknow-label'>Did you know? </span>
            <span className='didyouknow-value'>{artworker.did_you_know}</span>
          </div>
          <br/>
          <div className='descripttion'>
            <span className='Description-label'>Description: </span>
            <span className='Description-value'>{artworker.description}</span>
          </div>
      </div>
    </div>
  )
}

export default ExhibitionCard