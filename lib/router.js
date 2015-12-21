Router.configure({
	layoutTemplate: 'layout'
});

//Security
var OnBeforeActions = {
     loginRequired: function() {
     	if(!Meteor.userId()) {
     		Router.go('/');
     	} else {
     		this.next();
     	}
     }
 }

 Router.onBeforeAction(OnBeforeActions.loginRequired, {
 	only: ['add_product','new_review']
 });

Router.map(function() {
	//Featured
	this.route('featured', {
		path: '/',
		template: 'featured', 		
		data: function() {
			templateData = {
				products: Products.find({is_featured: "1"})
			};
			return templateData;
		}
	});

	//All Products
	this.route('products', {
		path: '/products',
		template: 'products',
		data: function() {
			templateData = {
				products: Products.find()
			};
			return templateData;
		}
	});

	//Add Product
	this.route('add_product', {
		path: '/add_product',
		template: 'add_product',
		data: function() {
			templateData = {
				categories: Categories.find()
			};
			return templateData;
		}
	});

	//Category Products
	this.route('category_products', {
		path:'/categories/:slug',
		template: 'category_products',
		data: function() {
			templateData = {
				category_products: Products.find({
					category: this.params.slug
				})
			};
			return templateData;
		}
	});

	//New Review
	this.route('new_review', {
		path: '/new-review/:_id',
		template: 'new_review',
		data: function() {
			return Products.findOne(this.params._id)
		}
	});

    //Product
	this.route('product', {
		path: '/products/:_id',
		template: 'product',
		data: function() {
			return Products.findOne(this.params._id)
		}
	});

});

