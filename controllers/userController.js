const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { errorHandler } = require("../middleware/errorMiddleware");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

//Register User
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //validate request
  if (!email || !password || !firstName || !lastName) {
    res.status(400);
    throw new Error("please fill in all required field");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 character");
  }

  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // create new user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  // generate token
  const token = generateToken(user._id);

  if (user) {
    const { _id, firstName, lastName, email, role } = user;
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      //   secure: true,
      //   sameSite: none,
    });
    // send user info
    res.status(201).json({
      _id,
      firstName,
      lastName,
      email,
      role,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user date");
  }

  res.send("Register User...");
});

//Login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //validate request
  if (!email || !password) {
    res.status(400);
    throw new Error("Add email and Password to Login");
  }
  // check if user exit
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User does not exist");
  }

  // check if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  //Generate Token

  const token = generateToken(user._id);
  if (user && passwordIsCorrect) {
    const newUser = await User.findOne({ email }).select("-password");
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      //   secure: true,
      //   sameSite: none,
    });
    // send user info
    res.status(201).json(newUser);
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});

// logout user
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    //   secure: true,
    //   sameSite: none,
  });
  return res.satus(200).json({ message: "successfully Logout" });
});

// get user

const getUser = asyncHandler(async (req, res) => {
  res.send("Get user");
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
};
