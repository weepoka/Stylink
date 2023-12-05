// controllers/cartController.js

const Cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');

const cartController = {
	addToCart: async (req, res) => {
		try {
			const { userId, productId, quantity } = req.body;

			const user = await User.findById(userId);
			const product = await Product.findById(productId);

			if (!user || !product) {
				return res.status(404).json({ message: 'User or product not found' });
			}

			const cart = await Cart.findOneAndUpdate(
				{ user: userId },
				{ $push: { items: { product: productId, quantity } } },
				{ new: true, upsert: true }
			);

			return res.json({ cart });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'An error occurred' });
		}
	},

	updateCartItem: async (req, res) => {
		try {
			const { itemId } = req.params;
			const { newQuantity } = req.body;

			const cart = await Cart.findOneAndUpdate(
				{ 'items._id': itemId },
				{ $set: { 'items.$.quantity': newQuantity } },
				{ new: true }
			);

			if (!cart) {
				return res.status(404).json({ message: 'Cart item not found' });
			}

			return res.json({ cart });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'An error occurred' });
		}
	},

	removeFromCart: async (req, res) => {
		try {
			const { itemId } = req.params;

			const cart = await Cart.findOneAndUpdate(
				{ 'items._id': itemId },
				{ $pull: { items: { _id: itemId } } },
				{ new: true }
			);

			if (!cart) {
				return res.status(404).json({ message: 'Cart item not found' });
			}

			return res.json({ cart });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'An error occurred' });
		}
	},

	getUserCart: async (req, res) => {
		try {
			const { userId } = req.params;

			const cart = await Cart.findOne({ user: userId }).populate(
				'items.product'
			);

			if (!cart) {
				return res.status(404).json({ message: 'Cart not found' });
			}

			return res.json({ cart });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'An error occurred' });
		}
	},
};

module.exports = cartController;
