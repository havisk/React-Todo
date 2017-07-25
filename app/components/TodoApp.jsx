let React = require('react');
let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let uuid = require('node-uuid');


let TodoApp = React.createClass({
    getInitialState: function () {
      return{
          showCompleted: false,
          searchText: '',
          todos: [
              {
                  id: uuid(),
                  text: 'walk the dog',
                  completed: true
              },
              {
                  id: uuid(),
                  text: 'clean the yard',
                  completed: false
              },
              {
                  id: uuid(),
                  text: 'do business plan',
                  completed: true
              },
              {
                  id: uuid(),
                  text: 'quit job',
                  completed: false
              }
          ]
      };
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function (id) {
        let updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id ) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted : showHide,
            searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        let {todos} = this.state;

        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;