let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');


let AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });
    it('should call onAddTodo with valid data', () => {
        let text = 'add text';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.text.value = text;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(text);
    });
});
    it('should not call onAddTodo with invalid data', () => {
        let text = '';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.text.value = text;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
});
