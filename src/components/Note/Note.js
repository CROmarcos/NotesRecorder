import './Note.scss'
import heart from '../../../src/images/heart.png'
import trashCan from '../../../src/images/trashcan.png'
import pen from '../../../src/images/pen.png'
import emptyHeart from '../../../src/images/emptyheart.png'
import printer from '../../../src/images/printer.png'
import alarm from '../../../src/images/alarm.png'
import accept from '../../../src/images/accept.png'
import cancel from '../../../src/images/cancel.png'
import store from '../../state/store'
import { deleteNote, markNote, setAlarm } from '../../state/actions'
import { Link } from 'react-router-dom'
import AlarmNotify, { getTimeString, openAlarm, makeAlarm, cancelAlarm } from '../Alarm/alarm'
import { useState } from 'react'

const Note = props => {

    // variable for displaying current alarm due to asynchronous store update
    const [notification, setNotification] = useState("N/A")

    let hours = []
    let minutes = []

    for (let i = 0; i < 60; i++) {
        if (i < 24) hours.push(i)
        let min = i
        if (i < 10) min = "0" + min
        minutes.push(min)
    }

    const saveAlarm = (id) => {
        let selectedHours = document.getElementById(`hours/${id}`)
        let hr = selectedHours.options[selectedHours.selectedIndex].value
        let selectedMinutes = document.getElementById(`minutes/${id}`)
        let min = selectedMinutes.options[selectedMinutes.selectedIndex].value
        store.dispatch(setAlarm({ id, alarm: getTimeString({ hours: hr, minutes: min, seconds: "00" }) }))
        setNotification(getTimeString({ hours: hr, minutes: min, seconds: "00" }).slice(0, -3))
    }

    const deleteAlarm = (id) => {
        store.dispatch(setAlarm({ id, alarm: "N/A" }))
    }

    return (
        <div className='card'>
            <div className='card__title'>
                <section className='card__title-text'>
                    <p className='displayed-text'>{props.title}</p>
                </section>
                <section className='card__title-actions'>
                    <Link to={`/edit/${props.noteId}`}><button className='action'><img src={pen} alt="edit" /></button></Link>
                    <button className='action' onClick={() => { store.dispatch(deleteNote(props.noteId)); props.refresh() }}><img src={trashCan} alt="delete"></img></button>
                    <button style={props.filtered ? { display: "none" } : { display: "flex" }} data-testid="mark-note" className='action' onClick={() => { store.dispatch(markNote({ id: props.noteId, importance: !props.important })); props.refresh() }}>{props.important ? <img src={heart} alt="important note" /> : <img src={emptyHeart} alt="important note" />}</button>
                </section>
            </div>
            <div className='card__body'>
                <div className='card__body-row'><label>Task: </label><span className='task-description'>{props.description}</span></div>
                <div className='card__body-row'><label>Created: </label><span>{props.creationDate}</span></div>
                <div className='card__body-row'><label>Last modified: </label><span>{props.lastModification}</span></div>
            </div>
            <div className='card__footer'>
                <section className='card__footer--side left'>
                    <div id={`open-alarm/${props.noteId}`} style={props.alarm === "N/A" ? { display: "flex" } : { display: "none" }} className='alarm--open'>
                        <button className='action' onClick={() => openAlarm(props.noteId)}><img src={alarm} alt="Make notification" /></button>
                    </div>
                    <div id={`set-alarm/${props.noteId}`} className='alarm--set'>
                        <label>hrs&nbsp;</label>
                        <select id={`hours/${props.noteId}`}>
                            {hours.map(hr => <option key={hr}>{hr}</option>)}
                        </select>
                        <label>&nbsp;min&nbsp;</label>
                        <select id={`minutes/${props.noteId}`}>
                            {minutes.map(min => <option key={min}>{min}</option>)}
                        </select>
                        &emsp;
                        <button className='action small' onClick={() => { saveAlarm(props.noteId); AlarmNotify(props.noteId); makeAlarm(props.noteId) }}><img src={accept} alt="Set alarm" /></button>
                        &emsp;
                        <button className='action small' onClick={() => { cancelAlarm(props.noteId); setNotification("N/A") }}><img src={cancel} alt="Cancel alarm" /></button>
                    </div>
                    <div id={`active-alarm/${props.noteId}`} style={props.alarm === "N/A" ? { display: "none" } : { display: "flex" }} className='alarm'>
                        <p>Alarm set for {notification !== "N/A" ? notification : props.alarm.slice(0, -3)}</p>&emsp;
                        <button className='action small' onClick={() => { deleteAlarm(props.noteId); cancelAlarm(props.noteId); setNotification("N/A") }}><img src={cancel} alt="Cancel alarm" /></button>
                    </div>
                </section>
                <section className='card__footer--side'>
                    <Link to={`/print/${props.noteId}`}><button className='action'><img src={printer} alt="Save to PDF" /></button></Link>
                </section>
            </div>
        </div>
    )
}

export default Note