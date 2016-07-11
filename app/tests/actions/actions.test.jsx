var expect = require('expect');
var actions = require('actions');

describe('Action', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'dog'
        }
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'walk dog'
        }
        var res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });

    it('should generate add todos action', () => {
        var todos = [{
            id: 123,
            text: 'xiao ming',
            completed: true,
            createdAt: 333,
            completedAt: undefined
        }];
        var action = {
            type: 'ADD_TODOS',
            todos
        }
        var res = actions.addTodos(todos);
        expect(res).toEqual(action);
    })

    it('should generate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: '123'
        }
        var res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    });
});
