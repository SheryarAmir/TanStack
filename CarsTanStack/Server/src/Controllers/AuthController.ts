import { Request, Response } from "express";
import Auth from "../Modal/AuthModal";
import bcrypt from "bcrypt";

// import { env } from "process";

// import jwt from "jsonwebtoken";
// import dotenv from 'dotenv';
// dotenv.config();

enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  CONFLICT = 409,
}

export async function SignUp(req: Request, res: Response): Promise<void> {
  const user = req.body;

  if (user.email && user.password) {
    console.log("you data is valid");
  } else {
    console.log(`please enter email and password to start`);
  }

  try {
    const newUser = await Auth.create({
      email: user.email,
      fullname: user.fullname,
      password: user.password,
     confirmPassword: user.confirmPassword,

    });

// const Secret=process.env.JWT_SECRET;
// if(!Secret)res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"any error in sign JWT Token"})
//     const accessToken=JWT.sign({email}, Secret)
    res
      .status(HttpStatus.CREATED)
      .json({ message: "user is successfully singup", newUser: newUser});


  } catch (error) {
    console.log(`their is an error in signup  ${error}`);
    res
      .status(HttpStatus.CONFLICT)
      .json(`their is an error in signup ${error}`);
  }
}


 // Adjust the path if needed

export async function SignIn(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  try {
    const user = await Auth.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (!user.password) {
      res.status(500).json({ message: "Password is missing for this user" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(401).json({ message: "Incorrect password" });
      return;
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
