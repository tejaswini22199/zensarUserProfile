const mongoose=require('mongoose');
var UserProfile=mongoose.model('UserProfile',
{
     Image : {type: String},
     Name:{type: String},
},'UserProfiles'

)
module.exports={UserProfile}