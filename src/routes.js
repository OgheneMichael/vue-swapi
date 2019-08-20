import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Starships from "./views/Starships";
import Planets from "./views/Planets";
import Characters from "./views/Characters";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/starships",
			name: "starships",
			component: Starships
		},
		{
			path: "/planets",
			name: "planets",
			component: Planets
		},
		{
			path: "/characters",
			name: "characters",
			component: Characters
		}
	]
});
