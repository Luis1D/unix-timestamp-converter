import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState();
  const [unixCode, setUnixCode] = useState();
  const [timeStamp, setTimeStamp] = useState();

  // Time conversion
  const convertUnixTime = (input) => {
    let date = new Date(input * 1000);
    let hours = date.getHours();
    let min = "0" + date.getMinutes();
    let sec = "0" + date.getSeconds();
    let formattedTime = hours + ":" + min.substr(-2) + ":" + sec.substr(-2);
    setTime(formattedTime);
  }

  const handleChange = (e) => {
    setUnixCode(e.target.value)  ;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeStamp(unixCode);
  }
  useEffect(() => {
    if (timeStamp) {
      convertUnixTime(timeStamp);
    }
  },[timeStamp])
  return (
    <div className="App">
      <div className="container">
        <h1>Unix Time Converter</h1>
        <form onSubmit={ handleSubmit }>
          <input
            type="number"
            name="unix-time"
            className="unix-input"
            placeholder="Unix Time"
            onChange={ handleChange }
          />
          <button type="submit">Convert</button>
        </form> <br />
        <div className="converted-time">
          {
            time ? <span>{ time }</span> : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
