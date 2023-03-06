import './App.css';
import Monitor from './components/Monitor'
import Buttons from './components/Buttons'

function App() {
  return (
    <div className="App">
      <h1>Mini FLuid </h1>
      <div className='container'>
        <Monitor />
        <Buttons />
    </div>
    </div>
  );
}

export default App;
