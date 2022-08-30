import User from "../models/userModels.js";

export const getUsers = async (req, res) => {
    try {
        const users = await  User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getUserById = async (req, res) => {
    try {
        const users = await  User.findById();
        res.json(users);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const insertUsers = await  user.save();
        res.status(201).json(insertUsers);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateUser = async (req, res) => {
    try {
        const updateUsers= await  User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateUsers);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deleteUsers= await  User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteUsers);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}