var Search = React.createClass({

	getInitialState: function () {
		return {
			initialItems: [
				'Apples',
				'Broccoli',
				'Chicken',
				'Duck',
				'Eggs',
				'Fish',
				'Granola',
				'Hash Browns',
				'Coffee'
			],
			items: []
		}
	},

	componentWillMount: function () {
		this.setState({
			items: this.state.initialItems
		});
	},

	searchList: function (event) {
		var value = event.target.value.toLowerCase();
		var items = this.state.initialItems;
		var updatedList = items.filter(function(item) {
			return item.toLowerCase().search(value) !== -1;
		});

		this.setState({
			items: updatedList
		});
	},

	render: function () {
		return (
			<div className="search">
				<input type="search" placeholder="Search" onChange={this.searchList}/>
				<Result items={this.state.items}/> 
			</div>
		);
	}
});


var Result = React.createClass({
	render: function () {
		return (
			<ul>
			{
				this.props.items.map(function(item) {
					return <li key={item}>{item}</li>
				})
			}
			</ul>
		)
	}
});


React.render(<Search />, document.getElementById('mount-point'));