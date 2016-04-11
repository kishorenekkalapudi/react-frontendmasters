const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
	searchTerm: ''
}

const rootReducer = (state=initialState, action) => {

	// // default es6 replaced
	// if (!state) { state = initialState }

	// state = state || initialState

	switch (action.type) {
		case SET_SEARCH_TERM: 
			return reduceSearchTerm(state, action)
		default: 
			return state
	}
}

const reduceSearchTerm = (state, action) => {
			const newState = {}
			Object.assign(newState, state, {searchTerm: action.value})
			return newState
}

const store = redux.createStore(rootReducer)


const mapStateToProps = (state) => ({searchTerm: state.searchTerm})

