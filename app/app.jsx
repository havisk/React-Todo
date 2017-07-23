let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');



//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>boilerplate3 project</p>,
    document.getElementById('app')
);