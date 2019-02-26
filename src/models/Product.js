const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductShema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    creatdAt:{
        type:Date,
        default:Date.now,
    },
});
ProductShema.plugin(mongoosePaginate);
mongoose.model('Product', ProductShema);