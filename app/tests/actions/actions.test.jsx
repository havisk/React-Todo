import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
let expect = require ('expect');

import firebase, {firebaseRef} from 'app/firebase';
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
    it('should generate update todo action', () => {
        let action = {
            type: 'UPDATE_TODO',
            id: 2,
            updates: {completed: false}
        };
        let res = actions.updateTodo(action.id, action.updates);

        expect(res).toEqual(action);
    });
    it('should generate login action object', () => {
        const action =  {
            type: "LOGIN",
            uid: '83yhi8'
        };
        const res = actions.login(action.uid);

        expect(res).toEqual(action);
    });
    it('should generate logout action', () => {
       const action = {
           type: 'LOGOUT'
       };
       const res = actions.logout();

       expect(res).toEqual(action);
    });

    describe('Test with firebase todos', () => {
        let testTodoRef;
        let uid;
        let todosRef;

        beforeEach((done) => {
            let credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN);

            firebase.auth().signInWithCredential(credential).then((user) => {
                uid = user.uid;
                todosRef = firebaseRef.child(`users/${uid}/todos`);

                return todosRef.remove()
            }).then(() => {
                testTodoRef = todosRef.push();

                testTodoRef.set({
                    text: 'Something to do',
                    completed: false,
                    createdAt: 987644
                })
            }).then(() => done()).catch(done);
        });

        afterEach((done) => {
            todosRef.remove().then(() => done());
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({auth: {uid}});
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();


                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();

                done();
            }, done);
        });

        it('should get todo back when startAddTodos is called', (done) => {
            const store = createMockStore({auth: {uid}});
            const action = actions.startAddTodos();

           store.dispatch(action).then(() => {
               const mockActions = store.getActions();

               expect(mockActions[0].type).toEqual('ADD_TODOS');
               expect(mockActions[0].todos.length).toEqual(1);
               expect(mockActions[0].todos[0].text).toEqual('Something to do');

               done();
           }, done);
        });

        it('should create todo and dispatch addTodo', (done) => {
            const store = createMockStore({auth: {uid}});
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
    });
});
