import { Link } from "react-router-dom"
import Note from "../Note/Note"
import store from "../../state/store"
import { useState } from "react"
import './NotesList.scss'

const NotesList = () => {
    const [list, setList] = useState(store.getState())

    //To filter only important notes
    const [filtered, setFiltered] = useState(false)

    function refresh() {
        setList(store.getState())
    }

    function filterList() {
        let cb = document.getElementById("check")
        if (cb.checked) {
            setList(list.filter(item => item.importance))
            setFiltered(true)
        }
        else {
            refresh()
            setFiltered(false)
        }
    }

    return (
        <>
            <div className="list">
                {list.map(note =>
                    <Note key={note.id} noteId={note.id} title={note.title} description={note.description} creationDate={note.creationDate} lastModification={note.lastModification} important={note.importance} filtered={filtered} refresh={refresh} />
                )}
            </div>
            <div className="list--actions">
                <div className="list--filter">
                    <label>Show only important notes</label>
                    <input id="check" data-testid="check" type="checkbox" onClick={filterList} unchecked="true" />
                </div>
                <Link to="/add"><button className="main-button">Add a note</button></Link>
            </div>
        </>
    )
}

export default NotesList