let React = require('react');
let {connect} = require('react-redux');
let actions = require('actions')

export let AddTodo = React.createClass({
    onAddSubmit: function (e) {
        e.preventDefault();
        let {dispatch} = this.props;
        let todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }

    },
   render: function () {
       return(
           <div className="container__footer">
               <form onSubmit={this.onAddSubmit}>
                   <input type="text" placeholder="What is your task" ref="todoText"/>
                   <button className="button primary expanded" >Add Todo</button>
               </form>
           </div>
       )
   }
});

export default connect()(AddTodo);