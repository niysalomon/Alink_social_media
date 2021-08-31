const mongoose=require("mongoose")

const PostsSchema = new mongoose.Schema({ 
    userId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
    },
    img:{
        type:String,
        max:500,
    },
    likes:{
        type:Array,
        default:[],
    },
},
{ timestamps:true}
);
module.exports= mongoose.model("Posts",PostsSchema);