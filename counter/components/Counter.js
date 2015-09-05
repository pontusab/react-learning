var Counter = React.createClass({

	incrementCount: function () {
		this.setState({
			count: this.state.count + 1
		});
	},

	decrementCount: function () {
		var count = this.state.count;

		this.setState({
			count: ( count > 0 ) ? count -1 : 0
		})
	},

	getInitialState: function () {
		return {
			count: 0
		}
	},

	render: function () {
		return (
			<div className="counter">
				<h1>{this.state.count}</h1>
				<button onClick={this.incrementCount}>Increment</button>
				<button onClick={this.decrementCount}>Decrement</button>
			</div>
		)
	}
});

React.render(<Counter />, document.getElementById('mount-point'));