var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            }
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });

    describe('todoReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: 123,
                    text: 'xiao ming',
                    completed: false,
                    createdAt: 333
                }
            };
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should update todo', () => {
            var todos = [{
                id: 123,
                text: 'xiao ming',
                completed: true,
                createdAt: 333,
                completedAt: 355
            }];
            var updates = {
                completed: false,
                completedAt: null
            };
            var action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(res[0].text);
        });

        it('should add existing todos', () => {
            var todos = [{
                id: 123,
                text: 'xiao ming',
                completed: true,
                createdAt: 333,
                completedAt: 355
            }];
            var action = {
                type: 'ADD_TODOS',
                todos
            };
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

        it('should wipe todos on logout', () => {
            var todos = [{
                id: 123,
                text: 'xiao ming',
                completed: true,
                createdAt: 333,
                completedAt: 355
            }];
            var action = {
                type: 'LOGOUT'
            };
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res.length).toEqual(0);
        });
    });

    describe('authReducer', () => {
        it('should store uid on LOGIN', () => {
            const action = {
                type: 'LOGIN',
                uid: '123abc'
            };
            const res = reducers.authReducer(undefined, df(action));

            expect(res).toEqual({
                uid: action.uid
            });
        });

        it('should remove uid on LOGOUT', () => {
            const authData = {
                uid: 'abc123'
            };
            const action = {
                type: 'LOGOUT'
            };
            const res = reducers.authReducer(df(authData), df(action));

            expect(res).toEqual({});
        });
    });

});
