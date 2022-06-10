/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import { BrowserRouter } from 'react-router-dom';
import EditNote from "../components/EditNote/EditNote";
import userEvent from "@testing-library/user-event";

it("cannot create note without title", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation()
    const { getByTestId } = render(
        <BrowserRouter>
            <EditNote />
        </BrowserRouter>
    )
    const button = getByTestId("save")
    userEvent.type(screen.getByPlaceholderText(/enter the title/i, ""))
    fireEvent.click(button)
    expect(alertMock).toHaveBeenCalledTimes(1)
})