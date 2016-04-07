var div = React.DOM.div
var h1 = React.DOM.h1

//composite component of our own creation
var MyTitle = React.createClass({
	render () {
		return (
			div(null,
				h1(null, 'Check out this other thing.')
			)
		)
	}
})

//create factory
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
  	MyTitleFactory(null),
  	MyTitleFactory(null),
  	MyTitleFactory(null)
    //refactor to React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))