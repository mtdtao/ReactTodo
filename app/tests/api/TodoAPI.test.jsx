var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todo array', () => {
            var todoData = [{
                id: 11,
                text: 'text features',
                completed: false
            }];
            TodoAPI.setTodos(todoData);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todoData);
        });

        it('should NOT set invalid todo array', () => {
            var todoData = {a: 2};
            TodoAPI.setTodos(todoData);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });


    describe('getTodos', () => {
        it('should return empty array with invalid localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todo with valid localStorage data', () => {
            var todoData = [{
                id: 11,
                text: 'text features',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todoData));
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todoData);
        });
    });

    describe('filterTodos', () => {
        var todos = [{
            id: 11,
            text: 'first features',
            completed: true
        }, {
            id: 12,
            text: 'special text features',
            completed: false
        }, {
            id: 13,
            text: 'text features',
            completed: true
        }];

        it('should return all items if showCompleted is is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return non-completed items if showCompleted is is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'text');
            expect(filteredTodos.length).toBe(2);
        });

        it('should return all items if searchText is is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
});
