const mongoose = require('mongoose');

//These are for defining the document structure
const aguitarSchema = new mongoose.Schema({model:String, price:String});
const eguitarSchema = new mongoose.Schema({model:String, price:String});

mongoose.model('guitar', aguitarSchema);
mongoose.model('eguitar', eguitarSchema);
