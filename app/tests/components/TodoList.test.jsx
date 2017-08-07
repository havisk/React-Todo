let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');


import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';


describe('TodoList', () => {
   it('should exist', () => {
    expect(TodoList).toExist();
   });
    it('should render 1 todo component for each todo item', () => {
        let todos = [{
            id: 1,
            text: 'do it',
            completed: false,
            completedAt: undefined,
            createdAt: 678
        },{
            id: 2,
            text: 'run',
            completed: false,
            completedAt: undefined,
            createdAt: 678
        }];
        let store = configure({
            todos
        });
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todoComponents.length).toBe(todos.length);
    });
    it('should render empty message with no todo', () => {
        let todos = [];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});