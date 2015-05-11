var TodoItem = React.createClass({
  getInitialState: function() {
    return {
      className: ''
    };
  },

  onChange: function() {
    this.setState({className: 'done'});
    this.props.onDone(this.props.value);
  },

  render: function() {
    return (
      <div className={this.state.className}>
        <label>
          <input type="checkbox" onChange={this.onChange} />
          {this.props.value}
        </label>
      </div>
    );
  }
});
