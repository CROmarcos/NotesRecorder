import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Note/Note.scss'
import './EditNote.scss'
import store from '../../state/store'
import { createNote, editNote } from '../../state/actions'

const EditNote = () => {

    let note_title = ''
    let note_description = ''

    const { id } = useParams()
    if (id) {
        let targetNote = store.getState().find(note => note.id === parseInt(id))
        note_title = targetNote.title
        note_description = targetNote.description
    }

    const [input, setInput] = useState({
        title: note_title,
        description: note_description
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: [e.target.value]
        })
    }

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

    const createNewNote = () => {
        store.dispatch(createNote({
            id: Date.now(),
            title: input.title,
            description: input.description,
            creationDate: date,
            lastModification: "not modified",
            importance: false
        }))
    }

    const editTheNote = () => {
        store.dispatch(editNote({
            id: parseInt(id),
            title: input.title,
            description: input.description,
            lastModification: date.toString()
        }))
        console.log(store.getState())
    }

    return (
        <div className='card'>
            <div className='card__title'>
                <input type="text" name="title" value={input.title} onChange={handleChange} />
            </div>
            <div className='card__body'>
                <input type="text" name="description" value={input.description} onChange={handleChange} />
            </div>
            <div className='card__footer'>
                <Link to="/"><button onClick={id ? editTheNote : createNewNote}>Save</button></Link>
            </div>
        </div>
    )
}

export default EditNote