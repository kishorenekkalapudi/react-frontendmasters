const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

// const { Router, Route, hashHistory } = ReactRouter
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const App = () => (
 	<Router history={hashHistory}>
 		<Route path='/' component={Layout}>
 			<IndexRoute component={Landing} />
			<Route path='/search' component={Search} />
		</Route>
 	</Router>
)

ReactDOM.render(<App />, document.getElementById('app'))