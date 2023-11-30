const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId, Mixed } = mongoose.Schema.Types;

// schema design

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true,
      lowercase: true,
      // minlength: [3, "Name must be at least 3 characters."],
      // maxlength: [100, "Name must be less than 100 characters."],
    },
    descriptionData: [
      {
        title: String,
        description: String,
      },
    ],
    oldPrice: {
      type: Number,
      required: [true, "Please provide a price for this product."],
    },
    offerPrice: {
      type: Mixed,
      default: null,
    },
    offerPercentage: {
      type: Mixed,
      default: null,
    },
    discountPrice: {
      type: Mixed,
    },
    promoCode: {
      type: String,
    },
    promoCodePrice: {
      type: String,
    },
    featureDatas: [
      {
        header: String,
        features: Object,
      },
    ],
    stock: {
      type: Mixed,
    },
    brand: String,
    productPin: {
      type: String,
      required: true,
    },

    imageUrls: [
      {
        type: String,
        required: [true, "Please provide the img urls"],
      },
    ],
    image: String,
    brand: String,
    category: {
      type: String,
      lowercase: true,
    },
    status: {
      type: String,
      enum: ["in-stock", "out-of-stock"],
      default: "in-stock",
    },
    newArrival: {
      type: Boolean,
    },
    subcategory: String,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
