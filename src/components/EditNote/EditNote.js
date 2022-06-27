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
    let min = today.getMinutes()
    if (min < 10) min = "0" + min
    let date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear() + "., " + today.getHours() + ":" + min

    const createNewNote = () => {
        store.dispatch(createNote({
            id: Date.now(),
            title: input.title,
            description: input.description,
            creationDate: date,
            lastModification: "still not modified",
            importance: false,
            alarm: "N/A"
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
                    <input className='input' type="text" name="title" value={input.title} placeholder="Enter the title*" maxlength="40" onChange={handleChange} />
                </div>
                <div className='card__body'>
                    <input className='input description' type="text" name="description" value={input.description} placeholder="Describe your task" maxLength="80" onChange={handleChange} />
                </div>
                <div className='card__footer'>
                    {input.title !== '' ?
                        <Link to="/"><button data-testid="save" className='input--action' onClick={id ? editTheNote : createNewNote}>Save</button></Link>
                        :
                        <button data-testid="save" className='input--action' onClick={() => alert("You have to enter the title!")}>Save</button>
                    }
                    <Link to="/"><button className='input--action'>Cancel</button></Link>
                </div>
            </div>
        </div>
    )
}

export default EditNote