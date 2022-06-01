import { useState } from 'react'
import '../Note/Note.scss'
import './EditNote.scss'

const EditNote = () => {

    const [input, setInput] = useState({
        name: "",
        description: "",
        creationDate: ""
    })

    const handleChange = () => { }

    return (
        <div className='card'>
            <div className='card__title'>
                <input type="text" name="name" value={input.name} onChange={handleChange} />
            </div>
            <div className='card__body'>
                <input type="text" name="description" value={input.description} onChange={handleChange} />
            </div>
        </div>
    )
}

export default EditNote