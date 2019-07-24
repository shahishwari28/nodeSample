var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    userid:{type:Number},
    user_name:{type:String},
    user_emailid:{type:String},
    password:{type:String},
    city:{type:String},
    mobile:{type:String}
})
module.exports = mongoose.model('User',UserSchema);