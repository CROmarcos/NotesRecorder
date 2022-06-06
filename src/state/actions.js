import * as actions from './actionTypes'

export const createNote = payload => ({
    type: actions.CREATE,
    payload
})

export const editNote = ({ id, title, description, lastModification }) => ({
    type: actions.MODIFY,
    payload: {
        id,
        title,
        description,
        lastModification
    }
})

export const deleteNote = payload => ({
    type: actions.DELETE,
    payload
})

export const markNote = ({ id, importance }) => ({
    type: actions.MARK,
    payload: {
        id,
        importance
    }
})