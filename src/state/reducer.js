import * as actions from './actionTypes'

const initialState = [
    {
        id: 1,
        name: "Napraviti kavu",
        description: "Skuhati Nescafe kremastu kavu s toplim mlijekom",
        creationDate: "2021-12-17",
        modificationDates: [],
        importance: false
    },
    {
        id: 2,
        name: "Složiti bazu podataka",
        description: "Kreirati tablice i ovisnost s triggerima",
        creationDate: "2022-03-11",
        modificationDates: ["2022-05-01", "2022-05-18"],
        importance: false
    },
    {
        id: 3,
        name: "Kontaktirati kupca",
        description: "Poslati mail kupcu da je proizvod dovršen",
        creationDate: "2020-05-17",
        modificationDates: [],
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
            return state.map(note => (note.id === action.payload.id) ?
                ({ ...note, name: action.payload.name, description: action.payload.description },
                    note.modificationDates.push(action.payload.modificationDate))
                : note)
        case actions.DELETE:
            return state.filter(note => note.id !== action.payload)
        case actions.MARK:
            return state.map(note => (note.id === action.payload.id) ? { ...note, importance: !this.importance } : note)
        default:
            return state
    }
}

export default reducer