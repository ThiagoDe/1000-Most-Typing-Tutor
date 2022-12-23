import { useState } from 'react';
import './App.css';
import Header from './Header';
import Table from './Table';
import TextReader from './TextReader';



function App() {
  const [data, setData] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'p'])

  const handleData = (d) => {
    setData(d)
  }

  return (
    <>
      <Header/>
    <div className="App">
      <div className='main-content'>
        {data.length > 0 ? <Table data={data} /> : null }
        <TextReader onData={handleData}/>
        <div ></div>
      </div>
    </div>
    </>
  );
}

export default App;
