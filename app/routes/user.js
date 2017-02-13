import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		return {
			"login": "john",
			"avatar_url": "avatar_url",
			"name": "John",
			"company": "Comp, Inc.",
			"location": "Tel Aviv",
			"email": "example@example.com",
			"public_repos": 228,
			"public_gists": 943,
			"followers": 2182
		};
	}
});
