//Product Categories
Categories = new Mongo.Collection('categories');

//Products Collection
Products = new Mongo.Collection('products');

//Product Images
ProductsImages = new FS.Collection("ProductsImages", {
	stores: [new FS.Store.GridFS("ProductsImages")]
});

ProductsImages.allow({
   insert: function(fileId, doc) {
   	return true;
   },
   download: function(fileId, doc) {
   	return true;
   }
});