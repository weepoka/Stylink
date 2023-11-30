const Category = require('../models/Category');
const Product = require('../models/Product');

exports.createCategoryService = async (data) => {
	const category = await Category.create(data);

	return category;
};
exports.getCategoriesService = async () => {
	const categories = await Product.distinct('category');
	const categoriesArray = await Product.aggregate([
		{
			$group: {
				_id: {
					category: '$category',
					subcategory: '$subcategory',
				},
			},
		},
		{
			$group: {
				_id: '$_id.category',
				subcategories: {
					$addToSet: '$_id.subcategory',
				},
			},
		},
		{
			$project: {
				category: '$_id',
				subcategories: 1,
				_id: 0,
			},
		},
	]);

	return { categories, categoriesArray };
};
exports.getCategoryServiceById = async (id) => {
	const store = await Category.findById(id);

	return store;
};
// exports.updateStoreService = async (id, data) => {
// 	const result = await Category.updateOne({ _id: id }, data, {
// 		runValidators: true,
// 	});

// 	return result;
// };
