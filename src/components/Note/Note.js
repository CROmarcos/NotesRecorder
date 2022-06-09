import './Note.scss'
import heart from '../../../src/images/heart.png'
import trashCan from '../../../src/images/trashcan.png'
import pen from '../../../src/images/pen.png'
import emptyHeart from '../../../src/images/emptyheart.png'
import printer from '../../../src/images/printer.png'
import store from '../../state/store'
import { deleteNote, markNote } from '../../state/actions'
import { Link } from 'react-router-dom'

const Note = props => {
    return (
        <div className='card'>
            <div className='card__title'>
                <section className='card__title-text'>
                    <p>{props.title}</p>
                </section>
                <section className='card__title-actions'>
                    <Link to={`/edit/${props.noteId}`}><button className='action'><img src={pen} alt="edit" /></button></Link>
                    <button className='action' onClick={() => { store.dispatch(deleteNote(props.noteId)); props.refresh() }}><img src={trashCan} alt="delete"></img></button>
                    {props.filtered ? <></> : <button className='action' onClick={() => { store.dispatch(markNote({ id: props.noteId, importance: !props.important })); props.refresh() }}>{props.important ? <img src={heart} alt="important note" /> : <img src={emptyHeart} alt="important note" />}</button>}
                </section>
            </div>
            <div className='card__body'>
                <div className='card__body-row'><label>Task: </label><span>{props.description}</span></div>
                <div className='card__body-row'><label>Created: </label><span>{props.creationDate}</span></div>
                <div className='card__body-row'><label>Last modified: </label><span>{props.lastModification}</span></div>
            </div>
            <div className='card__footer'>
                <Link to={`/print/${props.noteId}`}><button className='action'><img src={printer} alt="Save to PDF" /></button></Link>
            </div>
        </div>
    )
}

export default Note