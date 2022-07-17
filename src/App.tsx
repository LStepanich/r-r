import './App.css';
import Clients from './components/Clients';
import { Counter } from './components/Counter';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Counter />
      <Display />
      <Clients />
    </div>
  );
}

export default App;
