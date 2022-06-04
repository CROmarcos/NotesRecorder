import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import NewNote from './pages/NewNote'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Home()} />
        <Route path='/add' element={NewNote()} />
        <Route path='/edit/:id' element={NewNote()} />
      </Routes>

    </div>
  );
}

export default App;
