import { Route, Routes } from 'react-router-dom';
import './App.scss';
import EditNote from './components/EditNote/EditNote';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Home()} />
        <Route path='/add' element={EditNote()} />
      </Routes>

    </div>
  );
}

export default App;
