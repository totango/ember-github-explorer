import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
			{ login: "wycats", name: "Yehuda Katz" },
			{ login: "rwjblue", name: "Robert Jackson" },
			{ login: "wagenet", name: "Peter Wagenet" },
			{ login: "stefanpenner", name: "Stefan Penner" },
			{ login: "krisselden", name: "Kris Selden" },
			{ login: "ebryn", name: "Erik Bryn" },
		];
	}
});
