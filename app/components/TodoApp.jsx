let React = require('react');
let TodoList = require('TodoList');



let TodoApp = React.createClass({
    getInitialState: function () {
      return{
          todos: [
              {
                  id: 1,
                  text: 'walk the dog'
              },
              {
                  id: 2,
                  text: 'clean the yard'
              },
              {
                  id: 3,
                  text: 'do business plan'
              },
              {
                  id: 4,
                  text: 'quit job'
              }
          ]
      }
    },
    render: function () {
        let {todos} = this.state;

        return(
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
});

module.exports = TodoApp;