let expect = require('expect');

let TodoAPI = require('TodoAPI');


describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [{
                id: 23,
                text: 'test files',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });
        it('should not set invalid todo arrays', () => {
            let badTodo = {a: 'b'};
            TodoAPI.setTodos(badTodo);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bady localstorage data', () => {
            let actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });
        it('should return todo array in locastorage', () => {
            let todos = [{
                id: 23,
                text: 'test files',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            let actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filteredTodos', () => {
        let todos = [{
            id: 1,
            text: 'new',
            completed: true
            },
            {
                id: 2,
                text: 'old',
                completed: false
            },
            {
                id: 3,
                text: 'Forget',
                completed: true
            }];

        it('should return all items is showCompleted is true', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
        it('should return only items not completed if showCompleted is false', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });
        it('should sort by completed status', () => {
            let filteredTodos = TodoAPI.filterTodos(todos,true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });
        it('should filter todos by searchText', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'forget');
            expect(filteredTodos.length).toBe(1);
        });
        it('should return all todos if searchText is empty', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
});