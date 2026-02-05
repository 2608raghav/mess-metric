const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.json({ success: true, message: "Account created" });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN (Fixed to accept 'email' OR 'identifier')
exports.login = async (req, res) => {
  try {
    // FIX: Look for email OR identifier
    const { email, identifier, password } = req.body;
    const loginKey = email || identifier; 

    if (!loginKey || !password) {
        return res.status(400).json({ message: "Email and Password are required" });
    }

    // Find user by Email OR Name
    const user = await User.findOne({
      $or: [{ email: loginKey }, { name: loginKey }]
    });

    if (!user) {
      console.log("❌ Login Failed: User not found for", loginKey);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Login Failed: Wrong password for", loginKey);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate Token
    const token = generateToken(user);

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mealCoins: user.mealCoins
      }
    });
  } catch (err) {
    console.error("❌ Server Login Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};