<app>

	<h1>Hello World</h1>
	<img src="img/newicon2.jpg" alt="">
	
	<home></home>
	

	<script>
		var actions = require('../actions.js');
		var store = this.opts.store

		this.on('mount',function(){
			// store.dispatch(actions.loadTasks())
		})

		store.subscribe(function(){
			this.state = store.getState()
			this.update()
		}.bind(this))


	</script>
</app>