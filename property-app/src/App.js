import React, { useState } from 'react';
import './App.css';
import { readExcel } from './readExcel';
import { Slider } from '@mui/material';

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(50);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    readExcel(file).then((jsonData) => {
      setData(jsonData);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Property App</h1>
        <input type="file" onChange={handleFileUpload} />
        <Slider
          value={score}
          onChange={(e, newValue) => setScore(newValue)}
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
        <table className="table">
          <thead>
            <tr>
              <th>Property ID</th>
              <th>Location</th>
              <th>Price</th>
              <th>Attractiveness Score</th>
              <th>Type</th>
              <th>Size (sq feet)</th>
              <th>Year Built</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter(item => item['Attractiveness Score'] >= score)
              .map((item, index) => (
                <tr key={index}>
                  <td>{item['Property ID']}</td>
                  <td>{item['Location']}</td>
                  <td>{item['Price']}</td>
                  <td>{item['Attractiveness Score']}</td>
                  <td>{item['Type']}</td>
                  <td>{item['Size (sq feet)']}</td>
                  <td>{item['Year Built']}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
