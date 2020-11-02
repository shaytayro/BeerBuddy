/**The function returns a list of all beers according to requested page*/
export const getBeersAction = (pageNumber) => {
    return async (dispatch) => {
        fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=12`).then(function (response) {
            return response.json();
        }).then(function (data) {
            return dispatch({
                type: "SET_BEERS",
                payload: data
            })
        });
    }

}
/**The function returns a list of all beers according to requested page and food*/
export const getFoodAction = (food, pageNumber) => {
    const _food = food.replaceAll(" ", "_")
    return async (dispatch) => {
        fetch(`https://api.punkapi.com/v2/beers?food=${_food}&page=${pageNumber}&per_page=12`).then(function (response) {
            return response.json();
        }).then(function (data) {
            return dispatch({
                type: "SET_BEERS",
                payload: data
            })
        });
    }
}

