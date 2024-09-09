import userModel from "../models/useModel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import 'dotenv/config.js'

// Login user
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body

        if (!email || !password) {
            return res.status(400).json({success: false, message: 'Please provide email and password'})
        }

        const user = await userModel.findOne({email})

        if (!user) {
            return res.status(400).json({success: false, message: 'User not found'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({success: false, message: 'Incorrect password'})
        }

        const token = createToken(user._id)

        res.status(200).json({success: true, message: 'User logged in', token: token})

    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
}

const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}
// Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const exists = await userModel.findOne({email});
        // chicking the user already exists
        if (exists) {
            return res.status(400).json({ success: false, message: 'User already exists' })
        }
        // validating the email format & strong password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email' })
        }
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ success: false, message: 'Password not strong enough' })
        }
        // hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({ 
            name:name,
            email:email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        // creating a token for the new user
        const token = createToken(savedUser._id)
        res.status(200).json({ success: true, message: 'User registered', token: token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })   
    }
}

export { loginUser, registerUser };