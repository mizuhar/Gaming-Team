const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { secret } = require("../config/config");


exports.register = async (userData) => {
    const createUser = await User.create(userData);
    const token = await generateToken(createUser);
    return token;
  };

  exports.login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email or password not valid");
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error("Email or password not valid");
    }
    const token = await generateToken(user);
    return token;
  };
  async function generateToken(user) {
    const payload = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = await jwt.sign(payload, secret, { expiresIn: "2d" });
    return token;
  }
  

