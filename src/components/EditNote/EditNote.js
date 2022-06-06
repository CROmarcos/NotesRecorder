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
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ", " + today.getHours() + ":" + today.getMinutes()

    const createNewNote = () => {
        store.dispatch(createNote({
            id: Date.now(),
            title: input.title,
            description: input.description,
            creationDate: date,
            lastModification: "still not modified",
            importance: false
        }))
    }

    const editTheNote = () => {
        store.dispatch(editNote({
            id: parseInt(id),
            title: input.title,
            description: input.description,
            lastModification: date
        }))
        console.log(store.getState())
    }

    return (
        <div className='input-page'>
            <div className='card'>
                <div className='card__title'>
                    <input className='input' type="text" name="title" value={input.title} placeholder="Enter the title" onChange={handleChange} />
                </div>
                <div className='card__body'>
                    <input className='input description' type="text" name="description" value={input.description} placeholder="Describe your task" onChange={handleChange} />
                </div>
                <div className='card__footer'>
                    <Link to="/"><button className='input--action' onClick={id ? editTheNote : createNewNote}>Save</button></Link>
                    <Link to="/"><button className='input--action'>Cancel</button></Link>
                </div>
            </div>
        </div>
    )
}

export default EditNote