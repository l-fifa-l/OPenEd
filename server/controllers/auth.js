import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    // console.log(res.body)
    // get from req.body
    const { name, email, password } = req.body;
    // validate the user name, email, password
    if (!name) return res.status(400).send('Name is required');
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send('Password is required and should be min 6 character long');
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send('Email is taken');

    //hash password
    const hashedPassword = await hashPassword(password);

    //register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // save user
    await user.save();
    // console.log("saved user", user);
    return res.json({ ok: true });
  } catch (error) {
    console.log(error);
    return res.status(400).send('Error! Try Again');
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    //check if we have that user in the our database
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).send('No User found');

    //check password
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send('Wrong password');

    //create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    //return userand token to client,exclude hashed password
    user.password = undefined;

    //send token in cookie
    res.cookie('token', token, {
      httOnly: true,
      // secure: true, //only works on https
    });

    //send user as json response
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send('Error. Try Again.');
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie('token');
    return res.json({ message: 'Signout success' });
  } catch (err) {
    console.log(err);
  }
};

export const currentUser = async (req, res) => {
  try {
    // console.log('yaya');
    const user = await User.findById(req.user._id).select('-password').exec();
    console.log('CURRENT USER', user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};
