export const getRequestLoginSelector = state => {
    console.log('use Selector:',state);

    return state.authenReducer.authen
};
export const isFetchingSelector = state => state.authenReducer.isFetching;