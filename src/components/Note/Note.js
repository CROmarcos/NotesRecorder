import './Note.scss'
import heart from '../../../src/images/heart.png'
import trashCan from '../../../src/images/trashcan.png'
import store from '../../state/store'
import { markNote } from '../../state/actions'

const Note = props => {
    return (
        <div className='card'>
            <div className='card__title'>
                <section className='card__title-text'>
                    <p>{props.title}</p>
                </section>
                <section className='card__title-important'>
                    <button className='action' onClick={props.click}><img src={trashCan} alt="delete"></img></button>
                    {props.important ? <button className='action' onClick={() => store.dispatch(markNote(props.noteId))} onSubmit={props.refresh}>Mark as important</button> : <button className='action' onClick={props.click}><img src={heart} alt="important note" /></button>}
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