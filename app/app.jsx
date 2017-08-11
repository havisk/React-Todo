let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
import firebase from 'app/firebase';


import TodoApp from'TodoApp';
let actions = require('actions');
let store = require('configureStore').configure();
let TodoAPI = require('TodoAPI');
let TodoList = require('TodoList');
import Login from 'Login';



firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        hashHistory.push('/todos');
    }else {
        hashHistory.push('/');
    }
});

store.dispatch(actions.startAddTodos());

//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="todos" component={TodoApp}/>
                <IndexRoute component={Login}/>
                <TodoApp/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);