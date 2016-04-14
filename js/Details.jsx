const React = require('react')
const Header = require('./Header')

class Details extends React.Component {
	render () {
		const params = this.props.params || {}
		const { title, description, year, poster, trailer, imdbID } = params
		return (
			<div className='container'>
				<Header />
				<div className='video-info'>
					<h1 className='video-title'>{title}</h1>
					<h2 className='video-year'>{year}</h2>
					<p className='video-description'>{description}</p>
				  <h3 className='video-description'>
					<iframe src={`http://www.capitol.hawaii.gov/Members/Images/RepSenPhotos/${imdbID}`} frameBorder='0'
					allowFullScreen></iframe>
				  </h3>

				</div>
					<iframe width="853" height="480" src={`https://www.youtube-nocookie.com/embed/${trailer}
					?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0'
					allowFullScreen></iframe>
			</div>
		)
	}
}

const { object } = React.PropTypes

Details.propTypes = {
	params: object.isRequired
}

module.exports = Details