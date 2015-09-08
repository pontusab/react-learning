var App = React.createClass({
	render: function () {
		return (
			<Autocomplete source="data/countries.json" />
		);
	}
});


React.render(<App />, document.getElementById('app'));