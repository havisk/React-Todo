let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let Todo = require('Todo');


describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
});