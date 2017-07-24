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
                  text: 'walk the dog'
              },
              {
                  id: uuid(),
                  text: 'clean the yard'
              },
              {
                  id: uuid(),
                  text: 'do business plan'
              },
              {
                  id: uuid(),
                  text: 'quit job'
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
                    text: text
                }
            ]
        });
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
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;