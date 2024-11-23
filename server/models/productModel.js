const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema(
    {
        name: { type: String, required: true }
    }
)

const ProductSchema = new Schema(
    {
        name: { type: String, required: true },
        adjective: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: String, required: true },
    }
)

//将这个模型作为模块的输出，这样在其他文件中可以通过 require 来使用这个模型
module.exports = mongoose.model('Product', ProductSchema);