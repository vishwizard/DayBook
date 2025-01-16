import User from '../models/User.model';
import {z} from 'zod';
import AsyncHandler from '../utils/AsyncHandler';
import ApiResponse from '../utils/ApiResponse';

const userschema = z.object({
    username : z.string(),
    password : z.string()
});

const addUser = AsyncHandler(async (req,res)=>{
    userschema.safeParse(req.body);
    const newUser =  new User(req.body);
    await newUser.save();
    res.status(200).json(new ApiResponse(200,newUser,"User added successfully"));
});

const deleteUser = AsyncHandler(async (req,res)=>{
    await User.findOneAndDelete(req.body._id);
    res.status(200).json(new ApiResponse(200,[],"User Deleted Successfully"));
});

// const updateUser = AsyncHandler(async (req,res)=>{
//     userschema.partial().parse(req.body);

// })

export default {deleteUser, addUser};