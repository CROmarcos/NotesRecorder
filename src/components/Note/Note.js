import './Note.scss'

const Note=props=>{
    return (
        <div className='card'>
            <div className='card__title'>
                <p>{props.title}</p>
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