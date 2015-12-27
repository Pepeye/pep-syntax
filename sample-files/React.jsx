import React, { PropTypes } from 'react'

class App extends React.Component {

  handleSubmit (e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  }

  render () {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    )
  }
}

function() {
  var createItem = function(itemText) {
    return <li>{itemText}</li>;
  };
  return <ul>{this.props.items.map(createItem)}</ul>;
}

export default App;
