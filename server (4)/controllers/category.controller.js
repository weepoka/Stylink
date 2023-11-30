const {
	createCategoryService,
	getCategoriesService,
	getCategoryServiceById,
	// updateBrandService,
} = require('../services/category.service');

exports.createCategory = async (req, res, next) => {
	try {
		const result = await createCategoryService(req.body);

		res.status(200).json({
			status: 'success',
			message: 'Successfully created the category',
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			error: "Couldn't create the category",
			message: error.message,
		});
	}
};

exports.getCategories = async (req, res, next) => {
	try {
		const { categories, categoriesArray } = await getCategoriesService();

		res.status(200).json({
			success: true,
			data: categories,
			categoriesArray,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			error: "Couldn't create the brand",
			message: error.message,
		});
	}
};
exports.getCategoryById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const category = await getCategoryServiceById(id);
		if (!category) {
			res.status(400).json({
				status: 'fail',
				error: "Couldn't find a category with this id",
			});
		}
		res.status(200).json({
			status: 'success',
			data: category,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			error: "Couldn't create the brand",
			message: error.message,
		});
	}
};
