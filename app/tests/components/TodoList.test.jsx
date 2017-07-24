let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');


let TodoList = require('TodoList');
let Todo = require('Todo');

describe('TodoList', () => {
   it('should exist', () => {
    expect(TodoList).toExist();
   });
    it('should render 1 todo component for each todo item', () => {
        let todos = [{
            id: 1,
            text: 'do it'
        },{
            id: 2,
            text: 'run'
        }];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let todoCompnents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoCompnents.length).toBe(todos.length);
    });
});