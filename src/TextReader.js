import React, { useState, useEffect } from 'react';
import axios from 'axios';
import textFileUrl from './config';
import Carousel from './Carousel';

const TextReader = (props) => {
  const {onData} = props

  const [currWord, setCurrentWord] = useState('')
  const [prevWord, setPrevWord] = useState('')
  const [nextWord, setNextWord] = useState('')
  const [idx, setIdx] = useState(0)
  const [userInput, setUserInput] = useState('');
  const [currColor, setCurrentColor] = useState('black')
  const [prevColor, setPrevColor] = useState('black')
  const [numOfTries, setNumOfTries] = useState(0)
  const [queue, setQueue] = useState([])
 

  useEffect(() => { 
        axios.get(textFileUrl)
          .then(response => {
            // split the text file into an array of lines
            const lines = response.data.split('\n');
            // set the first line of text to the component state
            // setCurrentWord(lines[idx]);
            setNextWord(lines[idx]);
          })
          .catch(error => {
            // handle error
          });
   }, [idx, currColor, nextWord])

   useEffect(() => {
    if (currWord === '') {
      setCurrentWord(nextWord)
    }
   }, [nextWord, currWord])

  const handleSubmit = (event) => {
    // event.preventDefault();
    // compare the user input with the text
    
    if (userInput === currWord) {
       
    } else {
     
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      setNumOfTries(prev => prev + 1)
 
      if (numOfTries === 4) {
        setNumOfTries(0)
        setQueue( arr => [...arr, currWord])
        setCurrentWord(nextWord)
        setUserInput('')
        
      }
      else if (numOfTries === 3) {
        setIdx(prev => prev + 1) // next line
        setCurrentWord(nextWord)
        setUserInput('')
      } else {
        if (userInput === currWord) {
          setPrevWord(currWord)
          setPrevColor(currColor)
          setUserInput('')
        } else {
          setPrevWord(currWord)
          setPrevColor(currColor)
          setUserInput('')
        }
      }
    }
  }

  useEffect(() => {
    if (userInput.length === 0) setCurrentColor('black')
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== currWord[i] ) {
        setCurrentColor('red')
        break
      } else {
        setCurrentColor('black')
      }
    }
    if (userInput === currWord) setCurrentColor('green')
  }, [userInput, currWord]);

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value !== ' ' && event.target.value !== 'Enter' ) {
      setUserInput(event.target.value)
    } 
  }

  useEffect(() => {
    if (queue.length > 0){
      onData(queue)
    }
  })

  return (
    <div style={{
        // position: 'absolute', // Use absolute positioning
        // top: '40%', // Set the top property to 50%
        // left: '50%', // Set the left property to 50%
        // transform: 'translate(-50%, -50%)' // Use the transform property to center the element
      }}>
      <Carousel prevW={prevWord} prevColor={prevColor}
            currW={currWord} currColor={currColor}
            nextW={nextWord} nextColor={'black'}       
        />
     <h1>{numOfTries}</h1>
     <form onSubmit={handleSubmit}>
       <input type="text" value={userInput} 
            onChange={handleChange} 
            onKeyDown={handleKeyDown}
            style={{
              width: '200px',
              padding: '10px',
              border: '1px solid #ccc',
              fontSize: '26px'
        }} // Define inline styles here

            />
     </form>
    </div>
  );
}

export default TextReader

