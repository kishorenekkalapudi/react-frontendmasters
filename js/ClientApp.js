var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

// create factory
var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
  	MyTitleFact({title:'Props are great1',color:'rebeccapurple'}),
  	React.createElement(MyTitle,{title:'Use props everywhere',color:'mediumaquamarine'}),
  	ce(MyTitle,{title:'Props are the best',color:'peru'})
    // refactor to React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
