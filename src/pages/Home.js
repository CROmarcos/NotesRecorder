import { useState } from "react"
import Note from "../components/Note/Note"
import store from "../state/store"

const Home = () => {
    const [notes, setNotes] = useState(store.getState())
    return (
        <div>
            {notes.map(note =>
                <Note title={note.title} description={note.description} creationDate={note.creationDate} />
            )}
        </div>
    )
}

export default Home