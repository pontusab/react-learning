var Slider = React.createClass({
	getInitialState: function () {
		return {
			currentSlide: 0
		}
	},

	componentDidMount: function () {
		var timer = this.props.timer || 3000;
		var self = this;
	  	var nextSlide;

	  	this.timer = setInterval(function() {
	  		nextSlide = self.state.currentSlide === self.state.slides.length - 1 ? 0 : self.state.currentSlide + 1;

	  		self.changeSlide(nextSlide);

	  	}, timer);
	},

	clearTimer: function () {
		clearInterval(this.timer);
	},

	componentWillUnmount: function() {
		this.clearTimer();
	},

	changeSlide: function (slide) {
		this.setState({
			currentSlide: slide
		});
	},	

	mouseOverHandler: function (slide) {
		this.changeSlide(slide);

  		this.clearTimer();
	},

	render: function() {
		var self = this;
		var slides = this.props.slides;
		var currentSlide = this.state.currentSlide;

		return (
			<div className="slider">
				<div className="hero" onMouseOver={self.clearTimer}>
			    	<img src={slides[currentSlide].images.large}/>
			    </div>

				<ul className="thumbs">
			    	{
			    		slides.map(function (slide, index) {		
		    				return (
		    					<li key={slide.id} className={index === currentSlide ? 'active' : ''}>
		    						<a href="#" onMouseOver={self.mouseOverHandler.bind(self, index)}>
	    								<img src={slide.images.thumb} />
	    							</a>
								</li>
							);
			    		})
			    	}
			    </ul>
	
			</div>
		)
	}
});
