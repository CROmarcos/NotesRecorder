import './Note.scss'

const Note=props=>{
    return (
        <div className='card'>
            <div> {/*title section*/}
                <h1>{props.title}</h1>
            </div>
            <div> {/*title section*/}
                <p>{props.description}</p>
                <p>{props.creationDate}</p>
            </div>
        </div>
    )
}

export default Note