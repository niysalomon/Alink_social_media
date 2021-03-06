const mongoose=require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        requireed:true,
        min:3,
        max:30,
        unique:true,
    },
    email:{
        type:String, 
        require:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        min:6,
        unique:true,
    },
    profilePicture:{
        type:String,
        default:"",
    },
    profileCoverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[],
    },
    followings:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },    
    desc:{
        type:String,
        max:50
    },
    city:{
        type:String,
        max:20
    },
    from:{
        type:String,
        max:20
    },
    proffession:{
        type:String,
        max:20
    },
    relationship:{
        type:String,
        max:20
    },
    m_status:{
        type:String,
        max:20
    },
},
{ timestamps:true}
);
module.exports= mongoose.model("User",UserSchema);