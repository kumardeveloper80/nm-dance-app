import registrationModel from "../models/registration.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
    const { username, password, email, type = 4 } = req.body;
    try {
        const existingUser = await registrationModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const defaultPass = await bcrypt.hash("NmDance@9988", 10);
        const finalEmail = "nm.dance@gmail.com";

        const data = await registrationModel.create({
            username: username,
            password: hashedPassword,
            email: email,
            defaultEmail: finalEmail,
            defaultPassword: defaultPass,
            type: type
        })
        const token = jwt.sign({ email: data.email, id: data._id }, process.env.SECRET_KEY);
        res.status(201).json({ user: data, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await registrationModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.SECRET_KEY
        );
        return res.status(201).json({ user: existingUser, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
};
