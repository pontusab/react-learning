var Timer = React.createClass({

	getInitialState: function () {
		return {
			secondsElapsed: 0
		};
	},

	componentDidMount: function() {
		this.interval = setInterval(this.tick, 1000);
	},

	componentWillUnmount: function () {
		clearInterval(this.interval);
	},

	tick: function () {
		this.setState({
			secondsElapsed: this.state.secondsElapsed + 1
		});
	},

	render: function () {
		return (
			<div>Time {this.state.secondsElapsed}</div>
		);
	}

});

React.render(<Timer />, document.getElementById('timer'));