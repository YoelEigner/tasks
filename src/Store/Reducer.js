import { generateRandomId } from "../Utils/Utils";

const appReducer = (state = {
    tasks: [],
    search_query: '',
    search_status: ''

}, action) => {
    switch (action.type) {
        case "SET_TASK":
            action.tasks.id = generateRandomId()
            let tempNew = [...state.tasks]
            tempNew.push(action.tasks)
            return { ...state, tasks: tempNew }
        case "UPDATE_TASK":
            return { ...state, tasks: action.tempToUpdate }
        case "DELETE_TASK":
            return { ...state, tasks: action.tempToDelete }
        case "SET_SEARCH_STATUS":
            return { ...state, search_status: action.search_status }
        case "SET_SEARCH_QUERY":
            return { ...state, search_query: action.search_query }
        case "DELETE_COMPLETED":
            return { ...state, tasks: action.items }
        case "DELETE_ALL":
            let clear = []
            return { ...state, tasks: clear }
        default:
            return state;
    }
};

export default appReducer;
