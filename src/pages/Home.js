import NotesList from "../components/NotesList/NotesList"
import Title from "../components/Title/Title"

const Home = () => {
    return (
        <div className="page">
            <Title title="List of notes" />
            <NotesList />
        </div>
    )
}

export default Home