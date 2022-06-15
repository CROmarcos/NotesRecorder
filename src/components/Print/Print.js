import React, { useRef } from "react"
import { exportComponentAsPNG } from "react-component-export-image"
import { Link, useParams } from "react-router-dom"
import store from "../../state/store"
import './Print.scss'

const Print = () => {

    let today = new Date();
    let min = today.getMinutes()
    if (min < 10) min = "0" + min
    let date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear() + "., " + today.getHours() + ":" + min

    let targetNote
    let title = "", description = "", creationDate = "", lastModification = ""

    const { id } = useParams()
    if (id) {
        targetNote = store.getState().find(note => note.id === parseInt(id))
        title = targetNote.title
        description = targetNote.description
        creationDate = targetNote.creationDate
        lastModification = targetNote.lastModification
    }

    const Template = React.forwardRef((props, ref) => (
        <div ref={ref} className="print">
            <div className="print__card">
                <div className="print__title">{props.title}</div>
                <div className="print__body">
                    <p className="prop prop__title">Task description</p>
                    <p className="prop prop__value">{props.description}</p>
                    <p className="prop prop__title">Created at</p>
                    <p className="prop prop__value">{props.creationDate}</p>
                    <p className="prop prop__title">Last modified at</p>
                    <p className="prop prop__value">{props.lastModification}</p>
                </div>
                <div className="print__footer">
                    <p>Printed at: {date}</p>
                    <p>&copy; Notes Recorder 2022</p>
                </div>
            </div>
        </div>
    ))

    const componentRef = useRef()

    return (
        <React.Fragment>
            <Template ref={componentRef} title={title} description={description} creationDate={creationDate} lastModification={lastModification} />
            <div className="print__actions">
                <button className="main-button" onClick={() => exportComponentAsPNG(componentRef)}>Download note</button>
                <Link to="/"><button className="main-button">Back to home</button></Link>
            </div>
        </React.Fragment>
    )
}

export default Print