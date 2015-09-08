var Results = React.createClass({
	render: function () {
		var items = this.props.items;
		var url = 'https://www.google.se/search?q=';

		return (
			<ul>
			{
				items.map(function (item, index) {	
					return (
						<li key={index}>
							<a href={url + item}>{item}</a>
						</li>
					);
				})
			}
			</ul>
		);
	}
});

