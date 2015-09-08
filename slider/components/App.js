var images = [
	{
		"id": 1,
		"title": "Good image 1",
		"images": {
			"thumb": "http://placehold.it/150x150",
			"large": "http://placehold.it/500x500?text=Good image 1"
		}
	},
	{
		"id": 2,
		"title": "Good image 2",
		"images": {
			"thumb": "http://placehold.it/150x150",
			"large": "http://placehold.it/500x500?text=Good image 2"
		}
	},
	{
		"id": 3,
		"title": "Good image 3",
		"images": {
			"thumb": "http://placehold.it/150x150",
			"large": "http://placehold.it/500x500?text=Good image 3"
		}
	},
	{
		"id": 4,
		"title": "Good image 4",
		"images": {
			"thumb": "http://placehold.it/150x150",
			"large": "http://placehold.it/500x500?text=Good image 4"
		}
	}
];


React.render(<Slider slides={images} timer={5000} />, document.getElementById('app'));