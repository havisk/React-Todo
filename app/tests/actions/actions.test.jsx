import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
let expect = require ('expect');


let actions = require('actions');

let createMockStore = configureMockStore([thunk]);


describe('Actions', () => {
    it('should generate search text actions', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some text'
        };
        let res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });
    it('should generate add todo action', () => {
        let action = {
            type: 'ADD_TODO',
            todo: {
                id: '123',
                text: 'kool',
                completed: false,
                createdAt: 27383
            }
        };
        let res = actions.addTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should create todo and dispatch addTodo', (done) => {
       const store = createMockStore({});
       const todoText = 'My todo item';

       store.dispatch(actions.startAddTodo(todoText)).then(() => {
           const actions = store.getActions();
           expect(actions[0]).toInclude({
               type: 'ADD_TODO'
           });
           expect(actions[0].todo).toInclude({
               text: todoText
           });
           done();
       }).catch(done);
    });
    it('should generate add todos action object', () => {
        let todos = [{
            id: '345',
            text: 'anything',
            completed: false,
            completedAt: undefined,
            createdAt: 4400
        }];
        let action = {
            type: 'ADD_TODOS',
            todos
        };
        let res = actions.addTodos(todos);

        expect(res).toEqual(action);
    });

    it('should toggle  show completed action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        let res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });
    it('should generate toggle todo action', () => {
        let action = {
            type: 'TOGGLE_TODO',
            id: 2
        };
        let res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    });
});
