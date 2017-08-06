let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New State', store.getState())
});

store.dispatch(actions.addTodo('Clean up'));
store.dispatch(actions.setSearchText('up'));
store.dispatch(actions.toggleShowCompleted());



//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);