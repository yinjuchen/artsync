import { useState } from 'react'
import './quote-card.styles.scss'

const SingleQuoteCard = ({text}) => {
  const [like, setLike] = useState(false)
  return (
    <div className='quote-card-container'> 
    <span>{text}</span>
      <span className='heart-button' onClick={() => setLike((preLike) => !preLike)}>
          {like ? '🖤': '♡'}
        </span>
    </div>
  )
}

const QuoteCard = () => {
  return (
    <div className="quote-cards-container">
      <SingleQuoteCard text="“Creativity is a drug I cannot live without.” – Cecil B. DeMille" />
      <SingleQuoteCard text="“There is nothing more truly artistic than to love people.” – Vincent van Gogh" />
      <SingleQuoteCard text="“Creativity is a natural extension of our enthusiasm.” – Earl Nightingale"/>
      <SingleQuoteCard text="“Art is the stored honey of the human soul.” – Theodore Dreiser"/>
      <SingleQuoteCard text="“Every artist was first an amateur.” – Ralph Waldo Emerson"/>
      <SingleQuoteCard text="“Life is art. Art is life. I never separate it.” – Ai Weiwei"/>
      <SingleQuoteCard text="“Creativity is a natural extension of our enthusiasm.” – Earl Nightingale"/>
      <SingleQuoteCard text="“Art is the stored honey of the human soul.” – Theodore Dreiser"/>
      <SingleQuoteCard text="“I am seeking. I am striving. I am in it with all my heart.” – Vincent van Gogh"/>
      <SingleQuoteCard text="“To be an artist is to believe in life.” – Henry Moore"/>
      <SingleQuoteCard text="“Painting is just another way of keeping a diary.” – Pablo Picasso"/>
      <SingleQuoteCard text="“Art is never finished, only abandoned.” – Leonardo Da Vinci"/>
      <SingleQuoteCard text="“Art is not a thing, it is a way.” – Elbert Hubbard"/>
      <SingleQuoteCard text="Art is a line around your thoughts.” – Gustav Klimt"/>
      <SingleQuoteCard text="“Creativity is magic. Don’t examine it too closely.” – Edward Albee"/>
      <SingleQuoteCard text="“Art is never finished, only abandoned.” – Leonardo Da Vinci"/>
      <SingleQuoteCard text="“Inspiration does exist, but it must find you working.” – Pablo Picasso"/>
      <SingleQuoteCard text="“Art is the only way to run away without leaving home.” – Twyla Tharp"/>
      <SingleQuoteCard text="“To be an artist is to believe in life.” – Henry Moore"/>
      <SingleQuoteCard text="“There is no must in art because art is free.” – Wassily Kandinsky"/>
    </div>
  )
}

export default QuoteCard