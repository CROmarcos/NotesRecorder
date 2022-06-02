import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Note/Note.scss'
import './EditNote.scss'
import store from '../../state/store'
import { createNote } from '../../state/actions'

const EditNote = () => {

    const [input, setInput] = useState({
        title: "",
        description: "",
        creationDate: ""
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
            modificationDates: [],
            importance: false
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
                <Link to="/"><button onClick={createNewNote}>Save</button></Link>
            </div>
        </div>
    )
}

export default EditNote