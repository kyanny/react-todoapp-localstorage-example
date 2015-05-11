var NewItem = React.createClass({
  getInitialState: function() {
    return {value: null};
  },

  onChange: function(ev) {
    this.setState({value: ev.target.value});
  },

  onKeyUp: function(ev) {
    if (ev.which === 13) { // Enter Key
      this.add();
    }
  },

  onClick: function(ev) {
    this.add();
  },

  add: function() {
    if (this.state.value) {
      this.props.addItem(this.state.value);
      this.setState({value: null});
    }
    React.findDOMNode(this.refs.input).focus();
  },

  render: function() {
    return (
      <div>
        <input type="text" value={this.state.value} ref="input" onChange={this.onChange} onKeyUp={this.onKeyUp} />
        <input type="submit" onClick={this.onClick} value="Add" />
      </div>
    )
  }
});
