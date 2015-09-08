var Autocomplete = React.createClass({

	componentWillMount: function() {
		this.fetchData = _.debounce(this.fetchData, 250);
    },

	getInitialState: function() {
	    return {
    		results: []
	   	};
 	 },

	search: function (event) {
		var value = event.target.value;

		if(value.length) {
			this.fetchData(value)
		} else {
			this.setState({
				results: []
			});
		}
	},

	fetchData: function (query) {
		$.get(this.props.source, function(result) {
			if (this.isMounted()) {
				var matches = _(result).values().filter(function(countryName) {
					return new RegExp('^'+ query,'i').test(countryName);
				}).value();

				this.setState({
					results: matches
				});
			}
		}.bind(this));
	},

	render: function () {
		var results = this.state.results.length ? <Results items={this.state.results} /> : '';

		console.log(results);

		return (
			<div className="search">
				<input onChange={this.search} type="search"/>

				{results}
			</div>
		)
	}

});