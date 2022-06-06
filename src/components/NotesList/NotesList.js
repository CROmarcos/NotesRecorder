import { Link } from "react-router-dom"
import Note from "../Note/Note"
import store from "../../state/store"
import { useState } from "react"
import './NotesList.scss'

const NotesList = () => {
    const [list, setList] = useState(store.getState())

    function refresh() {
        setList(store.getState())
    }

    return (
        <>
            <div className="list">
                {list.map(note =>
                    <Note key={note.id} noteId={note.id} title={note.title} description={note.description} creationDate={note.creationDate} lastModification={note.lastModification} important={note.importance} refresh={refresh} />
                )}
            </div>
            <Link to="/add"><button className="main-button">Add a note</button></Link>
        </>
    )
}

export default NotesList