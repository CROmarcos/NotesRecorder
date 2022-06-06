import './Title.scss'

const Title = props => {
    return (
        <div className="title">
            <p className="title--text">{props.title}</p>
        </div>
    )
}
export default Title