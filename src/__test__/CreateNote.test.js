import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import Note from "../components/Note/Note"

it("note matches snapshot", () => {
    const card = renderer.create(
        <MemoryRouter>
            <Note id="9999" title="Test note" description="Note made for testing" creationDate="today" lastModification="N/A" filtered={false} alarm="21:00:00" />
        </MemoryRouter>
    ).toJSON()
    expect(card).toMatchSnapshot()
})