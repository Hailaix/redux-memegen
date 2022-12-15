const INITIAL_STATE = { count: 0, memes: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADDMEME':
            //adds the payload meme object to memes with an id of the current count and increments count.
            //payload is an object with toptext, bottomtext, and imgurl
            return { ...state, count: state.count + 1, memes: [...state.memes, { ...action.payload, id: state.count }] };
        case 'REMOVEMEME':
            //Filter's the meme with the id matching the payload out of memes
            return { ...state, memes: state.memes.filter(meme => meme.id !== action.payload.id) }
        default:
            return state;
    }
}

export default rootReducer;