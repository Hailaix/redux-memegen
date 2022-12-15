const INITIAL_STATE = { mood: ':(' }

const moodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'happy':
            return { ...state, mood: '^_^' };
        case 'sad':
            return { ...state, mood: 'T.T' };
        case 'angry':
            return { ...state, mood: 'ˋ皿ˊ' };
        case 'confused':
            return { ...state, mood : '(@_@)'};
        default:
            return state;
    }
}

const store = Redux.createStore(moodReducer);

const mood = document.getElementById('mood');
const hpybtn = document.getElementById('happy');
const sadbtn = document.getElementById('sad');
const angbtn = document.getElementById('angry');
const conbtn = document.getElementById('confused');

hpybtn.addEventListener('click', e => {
    store.dispatch({ type: 'happy' });
    mood.innerText = store.getState().mood;
});

sadbtn.addEventListener('click', e => {
    store.dispatch({ type: 'sad' });
    mood.innerText = store.getState().mood;
});
angbtn.addEventListener('click', e => {
    store.dispatch({ type: 'angry' });
    mood.innerText = store.getState().mood;
});
conbtn.addEventListener('click', e => {
    store.dispatch({ type: 'confused' });
    mood.innerText = store.getState().mood;
});