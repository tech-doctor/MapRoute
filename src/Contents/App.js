import './App.css';
import Map from '../Components/Map'
import PointsForm from '../Components/PointsForm'
import '../Styles/style.scss'

const App = () => {
  return (
    <div className="App">
      <PointsForm/>
      <Map/>
    </div>
  );
}

export default App;
