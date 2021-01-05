import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  
  {
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    reviews: [reviewSchema],
    name: {type: String, required: [true, 'Name must not be emtpy']},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    discount: {type: Number, required: true},
    isFreeShip:{type:Boolean},
    colors: [{type:String}],
    brand: {type: String, required: true},
    quanSold: {type: Number, required: true},
    size: [{type:String}],
    countInStock: {type: Number, required: true},
    image: {type:String},
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
