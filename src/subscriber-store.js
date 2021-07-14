import {createStore} from "redux";
import {act} from "react-dom/test-utils";


const initialState = {
    "subscribers":[]
}

function subscriberReducer(state=initialState, action) {

    switch (action.type){
        case "SET_SUBSCRIBERS":
            return {...state, "subscribers": action.payload}
        default:
            return state;
    }
    return state;
}

export default createStore(subscriberReducer);