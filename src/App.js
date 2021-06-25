import './App.css';
import ItemCount from './components/ItemCount.js';

function App() {
  return (
    <div className="App">
      <ItemCount max={5} min={0}/>
    </div>
  );
}

export default App;
