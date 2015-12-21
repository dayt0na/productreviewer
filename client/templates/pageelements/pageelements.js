//Extract Categories for sidebar

Template.sidebar.helpers({
	categories: function() {
		return Categories.find({},
		{
			sort: {
				name: 1
			}
		});
	}

});

//Extract Categories for drop-down
Template.navbar.helpers({
	categories: function() {
		return Categories.find({},
		{
			sort: {
				name: 1
			}
		});
	}

});

