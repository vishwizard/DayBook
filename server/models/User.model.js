import mongoose from "mongoose";
import bcrypt from 'bcrypt';

//Role Based Authentication not needed for now.
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

userSchema.pre('save',async (next)=>{
    if(!this.isModified('password')) return next();
    this.password = bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.comparePassword = (password)=>{
    return bcrypt.compare(password,this.password);
}

const User = mongoose.model('User',userSchema);


export default User;