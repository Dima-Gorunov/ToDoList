import exp from "constants";

const CHANGE_INPUT = "CHANGE_INPUT"
const ADD_NOTES = "ADD_NOTES"
const DELETE_NOTE = "DELETE_NOTE"
const PUSH_ID = "PUSH_ID"
const SORT_ARR = "SORT_ARR"
const SORT_ARR_ID = "SORT_ARR_ID"
const SET_TEXT_ARRAY = "SET_TEXT_ARRAY"
const CHECK_DUPLICATE = "CHECK_DUPLICATE"
const DELETE_ALL_NOTES = "DELETE_ALL_NOTES"
type Notes = {
    Id: number,
    Text: string,
    Done: boolean,
}[]

let initialState = {
    DefText: "Создайте заметку",
    InputValue: "",
    Notes: null as Notes | null,
    IdArray: null as number[] | null,
    Duplicate: false,
    TextArray: [""]
}
export type InitialStateType = typeof initialState

let AppReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case CHANGE_INPUT: {
            return {
                ...state,
                InputValue: action.payload
            }
        }
        case ADD_NOTES: {
            return {
                ...state,
                Notes: state.Notes ? [...state.Notes, {
                        Text: state.InputValue,
                        Done: false,
                        Id: Math.max.apply(null, state.IdArray ? state.IdArray : []) + 1
                    }]
                    : [{Text: state.InputValue, Done: false, Id: 0}]
            }
        }
        case DELETE_NOTE: {
            return {
                ...state,
                Notes: state.Notes ? state.Notes.filter(e => e.Id !== action.payload)
                    : null
            }
        }
        case SORT_ARR: {
            return {
                ...state,
                Notes: state.Notes ? state.Notes.map(e => e).sort((a, b) => a.Id - b.Id)
                    : null
            }
        }
        case SORT_ARR_ID: {
            return {
                ...state,
                Notes: state.Notes ? state.Notes.map((e, index) => {
                        return {
                            ...e,
                            Id: index
                        }
                    })
                    : null
            }
        }
        case SET_TEXT_ARRAY: {
            return {
                ...state,
                TextArray: state.Notes ? state.Notes.map(e => e.Text.toLowerCase()) : [""]
            }
        }
        case CHECK_DUPLICATE: {
            return {
                ...state,
                Duplicate: state.TextArray.some(e => e == state.InputValue.toLowerCase() && e !== "")
            }
        }
        case DELETE_ALL_NOTES: {
            return {
                ...state,
                Notes: []
            }
        }
        case PUSH_ID: {
            return {
                ...state,
                IdArray: state.Notes ? state.Notes.map(e => e.Id).sort((a, b) => a - b)
                    : null
            }
        }
        default: {
            return state
        }
    }
}

export const addNotesThunk = () => {
    return (dispatch: any) => {
        dispatch(addNotes())
        dispatch(sortNodes())
        dispatch(pushId())
        dispatch(sortArr())
        dispatch(changeInput(""))
        dispatch(setTextArray())
    }
}

export const deleteNoteThunk = (payload: any) => {
    return (dispatch: any) => {
        dispatch(deleteNote(payload))
        dispatch(sortNodes())
        dispatch(pushId())
        dispatch(sortArr())
        dispatch(setTextArray())
    }
}


export const changeInput = (payload: string) => ({type: CHANGE_INPUT, payload})
export const addNotes = () => ({type: ADD_NOTES})
export const sortNodes = () => ({type: SORT_ARR})
export const checkDuplicate = () => ({type: CHECK_DUPLICATE})
export const deleteAllNotes = () => ({type: DELETE_ALL_NOTES})
const setTextArray = () => ({type: SET_TEXT_ARRAY})
const deleteNote = (payload: number) => ({type: DELETE_NOTE, payload})
const sortArr = () => ({type: SORT_ARR_ID})
const pushId = () => ({type: PUSH_ID})

export default AppReducer