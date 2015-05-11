var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: JSON.parse(localStorage.getItem('items')) || this.props.items || []
    };
  },

  addItem: function(value) {
    var items = this.state.items;
    items.push(value);
    this.setState({items: items});
    localStorage.setItem('items', JSON.stringify(items));
  },

  onDone: function(value) {
    setTimeout(function() {
      var items = this.state.items;
      var index = items.indexOf(value);
      items.splice(index, 1);
      this.setState({items: items});
      localStorage.setItem('items', JSON.stringify(items));
    }.bind(this), 400);
  },

  newKey: function() {
    return Date.now() + Math.random();
  },

  renderItems: function() {
    return this.state.items.map(function(value) {
      return <TodoItem value={value} onDone={this.onDone} key={this.newKey()} />
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.renderItems()}
        <NewItem addItem={this.addItem} />
      </div>
    );
  }
});
