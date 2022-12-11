import cars from './Components/data';
function App() {
const [honda , tesla] = cars;
const {speedStats : {topSpeed:hondaTopSpeed},coloursByPopularity:[hondaTopColour]} = honda;
const {speedStats : {topSpeed:teslaTopSpeed},coloursByPopularity:[teslaTopColour]} = tesla;


  return (
    <div className="App">

       <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
       <th>Color</th>
     </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>
   </table>
    </div>
  );
}

export default App;
