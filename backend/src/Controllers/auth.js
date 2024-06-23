const User = require("../Model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        msg: "All Fields are Requireds",
      });
    }

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({
        success: false,
        msg: "User Already Registered",
      });
    }

    const hashPassword = await bcrypt(password, 10);

    const response = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashPassword,
    });
    if (response) {
      return res.status(200).json({
        success: true,
        msg: "User Register Successfully!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        msg: "All fields are Requireds",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User Not Registered",
      });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (matchPassword) {
      const options = {
        id: user._id,
      };

      const token = await jwt.sign(options, process.env.JWT_SECRET, {
        expiresIn: "2d",
      });

      return res
        .cookies("token", token, { expiresIn: "2d", httpOnly: true })
        .json({
          success: true,
          msg: "User Login Successfully!",
        });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// Logout endpoint
exports.logout = (req, res) => {
  try {
    res.cookie("token", "", { expires: new Date(0), httpOnly: true });
    return res.status(200).json({
      success: true,
      msg: "User Logged Out Successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
