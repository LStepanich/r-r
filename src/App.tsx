import './App.css';
import Clients from './components/Clients';
import { Counter } from './components/Counter';
import Display from './components/Display';
import UsersComponent from './components/UsersComponent';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Display /> */}
      <Clients />
      <UsersComponent />
    </div>
  );
}

export default App;
