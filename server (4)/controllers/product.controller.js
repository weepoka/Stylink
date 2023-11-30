const { json } = require("express");
const Product = require("../models/Product");
const { getProductService } = require("../services/product.service");

exports.createPrduct = async (req, res) => {
  console.log(req.body.product);
  try {
    const product = JSON.parse(req.body.product);

    product.quantity = product.quantity;
    product.oldPrice = product.oldPrice;
    product.offerPercentage = product.offerPercentage;

    const imageUrls = req.files.map(
      (file) => `${process.env.APP_URL}/images/${file.filename}`
    );
    product.imageUrls = imageUrls;

    product.image = imageUrls[0];

    const newProduct = await Product.create(product);

    // if (!newProduct || imageUrls.length ) {
    if (!newProduct) {
      return res.status(401).json({
        success: false,
        message: "something went wrong please try again",
      });
    }
    return res.status(200).json({
      success: true,
      message: "product added ",
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await getProductService(req);
    if (!products || products.length < 1) {
      return res.status(404).json({
        success: false,
        message: "no products found",
      });
    }
    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "internal server error",
    });
  }
};

exports.getAllproducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "internal server error",
    });
  }
};

// Controller function to get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.productId; // Assuming you're passing the product ID in the URL parameter
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "An error occurred while deleting the product",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    let updateData;
    let image;
    if (req.files) {
      updateData = JSON.parse(req.body.product); // Updated data from the request body
      const imageUrls = req.files.map(
        (file) => `${process.env.APP_URL}/images/${file.filename}`
      );
      updateData.imageUrls = imageUrls;
      updateData.image = imageUrls[0];
    } else {
      updateData = req.body;
    }

    // Find the product by ID and update it
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated",
      // data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the product",
    });
  }
};
