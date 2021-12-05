import User from "../models/user";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  //validation
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and should be minimum 6 characters long");

  let userExist = await User.findOne({ email }).exec();
  if (userExist) return res.status(400).send("Email is taken");

  //register

  const user = new User(req.body);

  try {
    await user.save();
    console.log("User Created", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log("Creation of user failed", err);
    return res.status(400).send("Error. Try again");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Checking user exist
    let user = await User.findOne({ email }).exec();
    if (!user) res.status(400).send("User not found");
    //Comparing password
    user.comparePassword(password, (err, match) => {
      console.log("Compairing password", err);
      if (!match || err) return res.status(400).send("Wrong Password");
      //Generatinf token
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    });
  } catch (err) {
    console.log("Login Error", err);
    res.status(400).send("Signin failed");
  }
};
