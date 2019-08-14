import { createStore } from 'redux';

const initState = {
    todos: [],
    posts: []
};

function myreducer(state = initState, action) {}

const store = createStore(myreducer);
