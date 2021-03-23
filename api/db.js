const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProjectData',{useNewUrlParser:true,useUnifiedTopology:true},
err=>{
    if(!err)
    {
        console.log('Connected to MongoDB');

    }
    else{
        console.log('There is some error in the connection');
    }
}
)