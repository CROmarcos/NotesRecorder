/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import { BrowserRouter } from 'react-router-dom';
import NotesList from '../components/NotesList/NotesList';

it("when filtered, button for marking notes is hidden", () => {
    const { getByTestId, getAllByTestId } = render(
        <BrowserRouter>
            <NotesList />
        </BrowserRouter>
    )
    const checkBox = getByTestId("check")
    const heartsList = getAllByTestId("mark-note")
    fireEvent.click(checkBox)
    expect(checkBox.checked).toEqual(true)
    heartsList.forEach(element => {
        expect(element).not.toBeVisible()
    });
})