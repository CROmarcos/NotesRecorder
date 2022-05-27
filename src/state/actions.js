import * as actions from './actionTypes'

export const createNote = payload => ({
    type: actions.CREATE,
    payload
})

export const editNote = (name, description, modificationDate) => ({
    type: actions.MODIFY,
    payload: {
        name,
        description,
        modificationDate
    }
})

export const deleteNote = payload => ({
    type: actions.DELETE,
    payload
})

export const markNote = payload => ({
    type: actions.MARK,
    payload
})