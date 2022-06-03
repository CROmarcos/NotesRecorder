import { Link } from "react-router-dom"
import Note from "../Note/Note"
import store from "../../state/store"
import { useState } from "react"

const NotesList = () => {
    const [list, setList] = useState(store.getState())

    function refresh(){
        setList(store.getState())
    }

    return (
        <div>
            {list.map(note =>
                <Note key={note.id} noteId={note.id} title={note.title} description={note.description} creationDate={note.creationDate} important={note.importance} refresh={refresh} />
            )}
            <Link to="/add"><button>Add new</button></Link>
        </div>
    )
}

export default NotesList