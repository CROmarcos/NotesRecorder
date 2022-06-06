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

    function filterList() {
        let cb = document.getElementById("check")
        if (cb.checked) setList(list.filter(item => item.importance))
        else refresh()
    }

    document.getElementById("check")

    return (
        <>
            <div className="list">
                {list.map(note =>
                    <Note key={note.id} noteId={note.id} title={note.title} description={note.description} creationDate={note.creationDate} lastModification={note.lastModification} important={note.importance} refresh={refresh} />
                )}
            </div>
            <div className="list--filter">
                <label>Show only important notes</label>
                <input id="check" type="checkbox" onClick={filterList} unchecked />
            </div>
            <Link to="/add"><button className="main-button">Add a note</button></Link>
        </>
    )
}

export default NotesList