import EditNote from "../components/EditNote/EditNote"
import Title from "../components/Title/Title"

const NewNote = () => {
    return (
        <div className="page">
            <Title title="Make your note" />
            <EditNote />
        </div>
    )
}

export default NewNote