import { useState } from 'react';
import './App.scss';
import Note from './components/Note/Note';
import store from './state/store';

function App() {
  const [notes, setNotes]=useState(store.getState())
  return (
    <div className="App">
      {notes.map(note=>
        <Note title={note.name} description={note.description} creationDate={note.creationDate} />
        )}
    </div>
  );
}

export default App;
