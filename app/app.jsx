let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();
let TodoAPI = require('TodoAPI');


store.subscribe(() => {
    let state = store.getState();
    console.log('New State', state);
    TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);