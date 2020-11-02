const initState = {
    beers: []
}

const beersReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_BEERS":
            state = { ...state, beers: action.payload }
            break;

        default:
            break;
    }
    return state;

}
export default beersReducer;
