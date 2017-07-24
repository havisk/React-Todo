let React = require('react');


let AddTodo = React.createClass({
    onAddSubmit: function (e) {
        e.preventDefault();

        let text = this.refs.text.value;

        if (text.length > 0) {
            this.refs.text.value = '';
            this.props.onAddTodo(text);
        } else {
            this.refs.text.focus();
        }

    },
   render: function () {
       return(
           <div>
               <form onSubmit={this.onAddSubmit}>
                   <input type="text" placeholder="What is your task" ref="text"/>
                   <button className="button primary expanded" >Todo</button>
               </form>
           </div>
       )
   }
});

module.exports = AddTodo;