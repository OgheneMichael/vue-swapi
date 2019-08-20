import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Starships from "./views/Starships";
import ShipDetail from "./views/ShipDetail";
import Planets from "./views/Planets";
import PlanetDetail from "./views/Planets";
import Characters from "./views/Characters";
import CharacterDetail from "./views/Characters";

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
			path: "/starships/:id",
			name: "ship detail",
			component: ShipDetail
		},
		{
			path: "/planets",
			name: "planets",
			component: Planets
		},
		{
			path: "/planets/:id",
			name: "planet detail",
			component: PlanetDetail
		},
		{
			path: "/characters",
			name: "characters",
			component: Characters
		},
		{
			path: "/characters/:id",
			name: "character detail",
			component: CharacterDetail
		}
	]
});
