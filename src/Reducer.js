export const initialState = {
    user:null,
    playlist:[],
    playing:false,
    item:null,
    token:""
};

const Reducer = (state,action) => {
    console.log("action",action);

    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token
            }
        default:
            return state;
    }
};

export default Reducer;