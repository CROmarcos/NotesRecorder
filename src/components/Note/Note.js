import './Note.scss'
import heart from '../../../src/images/heart.png'
import trashCan from '../../../src/images/trashcan.png'
import pen from '../../../src/images/pen.png'
import emptyHeart from '../../../src/images/emptyheart.png'
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
                <section className='card__title-important'>
                    <Link to={`/edit/${props.noteId}`}><button className='action'><img src={pen} alt="edit" /></button></Link>
                    <button className='action' onClick={() => { store.dispatch(deleteNote(props.noteId)); props.refresh() }}><img src={trashCan} alt="delete"></img></button>
                    {props.important ? <button className='action' onClick={() => { store.dispatch(markNote(props.noteId)); props.refresh() }}><img src={emptyHeart} alt="important note" /></button> : <button className='action' onClick={props.click}><img src={heart} alt="important note" /></button>}
                </section>
            </div>
            <div className='card__body'>
                <p>{props.description}</p>
                <p>{props.creationDate}</p>
            </div>
            <div className='card__footer'></div>
        </div>
    )
}

export default Note