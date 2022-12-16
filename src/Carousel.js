import React, { useEffect, useState } from 'react';

const Carousel = ({prevW, prevColor, currW, currColor, nextW, nextColor}) => {
  const [words, setWords] = useState([{word:prevW, color: prevColor},
    {word: currW, color: currColor},{ word:nextW, color: nextColor}]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    setWords([{word:prevW, color: prevColor},
    {word: currW, color: currColor},{ word:nextW, color: nextColor}])
  }, [prevW, prevColor, currW, currColor, nextW, nextColor])


  // const handleNext = () => {
  //   setCurrentIndex((currentIndex + 1) % words.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((currentIndex + words.length - 1) % words.length);
  // };

  return (
    <div >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {words.map((word, index) => (
          
          <div
            key={index}
            className="carousel-word"
            style={{
              fontSize: '18x',
              width: '150px',
              height: '50px',
              background: 'lightgrey',
              margin: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              opacity: index === currentIndex ? 1 : 0.5
            }}
          >
            <h1 style={{ color: word.color }}>{word.word}</h1>
          </div>
        ))}
      </div>
      {/* <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button> */}
    </div>
  );
}

export default Carousel

