const mongoose = require('mongoose');

//These are for defining the document structure
const aguitarSchema = new mongoose.Schema({model:String, price:String});
const eguitarSchema = new mongoose.Schema({model:String, price:String});

mongoose.model('aguitar', aguitarSchema, 'aguitar');
mongoose.model('eguitar', eguitarSchema, 'eguitar');
