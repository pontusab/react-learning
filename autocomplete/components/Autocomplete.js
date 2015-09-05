var Autocomplete = React.createClass({

	getInitialState: function() {
	    return {
    		data: [],
    		items: []
	   	};
 	 },

	componentDidMount: function () {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				if(this.isMounted()) {
					this.setState({
						data: data
					});
				}
			}.bind(this)
		});
	},

	search: function (event) {
		var value = event.target.value.toLowerCase();
		var items = this.state.data;
		

		// this.setState({
		// 	items: updatedList
		// });

	},

	render: function () {
		return (
			<div>
				<input type="search" onChange={this.search} />
			</div>
		)
	}
});


React.render(<Autocomplete url="data/data.json" />, document.getElementById('app'));