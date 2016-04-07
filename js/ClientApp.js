var div = React.DOM.div
var h1 = React.DOM.h1

//composite component of our own creation
var MyTitle = React.createClass({
	render () {
		return (
			div(null,
				h1({style: {color: this.props.color}}, this.props.title)
			)
		)
	}
})

//create factory
var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
  	MyTitleFact({title: 'Props are great1', color: 'rebeccapurple'}),
  	React.createElement(MyTitle, {title: 'Use props everywhere', color: 'mediumaquamarine'}),
  	ce(MyTitle, {title: 'Props are the best', color: 'peru'})
    //refactor to React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))