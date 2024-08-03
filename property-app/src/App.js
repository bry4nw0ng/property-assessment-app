import { useState } from 'react';
import { Slider } from 'react-bootstrap';

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(50); // Initial slider value

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    readExcel(file).then((jsonData) => {
      setData(jsonData);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <Slider
        value={score}
        onChange={(e) => setScore(e.target.value)}
        min={0}
        max={100}
      />
      <table>
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
          {data.map((item, index) => (
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
    </div>
  );
}

export default App;
