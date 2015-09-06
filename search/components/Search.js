var Search = React.createClass({

	getInitialState: function () {
		return {
			data: this.props.data,
			items: []
		};
	},

	componentWillMount: function () {
		this.setState({
			items: this.props.data
		});
	},

	search: function (event) {
		var value = event.target.value.toLowerCase();
		var items = this.state.data;
		var updatedList = items.filter(function(item) {
			return item.toLowerCase().search(value) !== -1;
		});

		this.setState({
			items: updatedList
		});
	},

	render: function () {
		return (
			<fieldset>
				<input type="search" onChange={this.search} />

				<Result items={this.state.items}/>
			</fieldset>
		);
	}
});	

var data = [
	'Apples',
	'Broccoli',
	'Chicken',
	'Duck',
	'Eggs',
	'Fish',
	'Granola',
	'Hash Browns',
	'Coffee'
];

React.render(<Search data={data}/>, document.getElementById('search'));