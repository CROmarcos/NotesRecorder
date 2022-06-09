import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import NewNote from './pages/NewNote'
import ReadyToPrint from './pages/ReadyToPrint';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Home()} />
        <Route path='/add' element={NewNote()} />
        <Route path='/edit/:id' element={NewNote()} />
        <Route path='/print/:id' element={ReadyToPrint()} />
      </Routes>
    </div>
  );
}

export default App;
