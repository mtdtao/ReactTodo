var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO with valid data', () => {
        var todoText = 'check mail'
        var action = {
            type: 'ADD_TODO',
            text: todoText
        };
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should NOT dispatch ADD_TODO with empty data', () => {
        var todoText = ''
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled;
    });
});
