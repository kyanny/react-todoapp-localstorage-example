var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: this.props.items || []
    };
  },

  addItem: function(value) {
    var items = this.state.items;
    items.push(value);
    this.setState({iitems: items});
  },

  onDone: function(value) {
    setTimeout(function() {
      var items = this.state.items;
      var index = items.indexOf(value);
      items.splice(index, 1);
      this.setState({items: items});
    }.bind(this), 400);
  },

  renderItems: function() {
    return this.state.items.map(function(value) {
      return <TodoItem value={value} onDone={this.onDone} />
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
