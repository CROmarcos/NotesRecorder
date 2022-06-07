import Print from "../components/Print/Print"
import Title from "../components/Title/Title"

const ReadyToPrint = () => {
    return (
        <div className="page">
            <Title title="Note exporting" />
            <Print />
        </div>
    )
}

export default ReadyToPrint