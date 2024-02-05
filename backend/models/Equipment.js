const mongoose = require('mongoose');
const User = require('./User');

const equipmentSchema = new mongoose.Schema({
      name:{
        type:String,
        require:true
      },
      type:{
        type:String,
        require:true
      },
      manufacturer:{
        type:String,
        require:true
      },
      model:{
        type:String,
        default:false
      },
      year:{
        type:String,
        require:true
      },
      capacity:{
        type:String,

      },
      
      image:{
        type:String,

      },
      rate:{
        type:String,
        require:true
      },
      owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true, 
    
      }
})

module.exports = mongoose.model('Equipment',equipmentSchema);