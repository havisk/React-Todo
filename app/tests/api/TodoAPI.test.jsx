let expect = require('expect');

let TodoAPI = require('TodoAPI');


describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
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