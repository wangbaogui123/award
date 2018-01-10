// import Vue from 'vue'
import routers from './router'

Vue.use(VueRouter);

const routes = routers();

const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})


const app = new Vue({
	
	el:"#app",
	router:router,
	data:{
		currentRoute: window.location.pathname   
	},
	computed:{

	},

	methods:{
	
	}


})


window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname
})





