const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  // Validasi user email dan password
  const user = await User.findOne({ where: { email } });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Generate JWT token dengan waktu kedaluwarsa berdasarkan rememberMe
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: req.tokenExpiry });

  res.json({ token });
};
