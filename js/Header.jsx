const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
	render () {
		return (
			<header className='header'>
				<h1 className='brand'>
					<Link to='/' className='brand-link'>
						popoyo
					</Link>
				</h1>
			</header>	
		)
	}
})

module.exports = Header