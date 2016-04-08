const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const { Router, Route, hashHistory } = require('react-router')

// const { Router, Route, hashHistory } = ReactRouter
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const App = () => (
 	<div className='app-container'>
    <div className='home-info'>
    	<h1 className='title'>poliworks</h1>
    	<input className='search' type='text' placeholder='Search' />
    	<button className='browse-all'> or Browse All</button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))