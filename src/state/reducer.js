import * as actions from './actionTypes'

const initialState = [
    {
        id: 1,
        title: "Napraviti kavu",
        description: "Skuhati Nescafe kremastu kavu s toplim mlijekom",
        creationDate: "17.12.2021., 23:11",
        lastModification: "still not modified",
        importance: false
    },
    {
        id: 2,
        title: "Složiti bazu podataka",
        description: "Kreirati tablice i ovisnost s triggerima",
        creationDate: "11.3.2022., 2:24",
        lastModification: "1.5.2022., 1:01",
        importance: false
    },
    {
        id: 3,
        title: "Kontaktirati kupca",
        description: "Poslati mail kupcu da je proizvod dovršen",
        creationDate: "17.5.2020., 13:07",
        lastModification: "still not modified",
        importance: true
    },
    {
        id: 4,
        title: "Napraviti testiranje",
        description: "Automatizacija testiranja",
        creationDate: "7.4.2021., 12:21",
        lastModification: "still not modified",
        importance: true
    }
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CREATE:
            return [
                ...state,
                action.payload
            ]
        case actions.MODIFY:
            return state.map(note => (note.id === action.payload.id) ? ({ ...note, title: action.payload.title, description: action.payload.description, lastModification: action.payload.lastModification }) : note)
        case actions.DELETE:
            return state.filter(note => note.id !== action.payload)
        case actions.MARK:
            return state.map(note => (note.id === action.payload.id) ? ({ ...note, importance: action.payload.importance }) : note)
        default:
            return state
    }
}

export default reducer