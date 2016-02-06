var riot 	= require('riot'),
	redux 	= require('redux'),
	thunk 	= require('redux-thunk')

// style
require('./scss/main.scss');

// script
require('./app/app.tag');
require('./app/home/home.tag');

var reducer = function(state={title:[]},action){
	console.log(action);
	switch(action.type){
		case 'TASKS_LOADED':
			return Object.assign({},state,{tasks:action.data});
		case 'TOGGLE_LOADING':
			return Object.assign({},state,{isLoading:action.data});
		default:
			return state
	}
	
}

// var reduxStore = redux.createStore(reducer)

var createStoreWithMiddleware = redux.compose(
	redux.applyMiddleware(thunk)
)(redux.createStore)

var reduxStore = createStoreWithMiddleware(reducer);

document.addEventListener('DOMContentLoaded', () => {
	riot.mount('app',{store:reduxStore});
})