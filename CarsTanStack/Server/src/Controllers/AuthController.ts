import { Request, Response } from "express";
import Auth from "../Modal/AuthModal";
import JWT from "jsonwebtoken";
import { env } from "process";

import dotenv from "dotenv";
dotenv.config();

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

    res
      .status(HttpStatus.CREATED)
      .json({ message: "user is successfully singup", newUser: newUser });
  } catch (error) {
    console.log(`their is an error in signup  ${error}`);
    res
      .status(HttpStatus.CONFLICT)
      .json(`their is an error in signup ${error}`);
  }
}

// this function handles user sign-in

export async function SignIn(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  try {
    const user = await Auth.findOne({ email });
    // check if user exists
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    // check if password is correct
    if (user.password !== password) {
      res.status(401).json({ message: "Incorrect password" });

      
      return;
    }
    // Generate JWT token
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      res
        .status(500)
        .json({ message: "JWT secret not found in environment variables" });
      return;
    }

    const accessToken = JWT.sign({ email: user.email }, secret, {
      expiresIn: "1h",
    });

    // Respond with success message and token
    // console.log(accessToken)
 res
  .cookie("accessToken", accessToken,{
     httpOnly: true,
    secure: false, // true in production
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  }).status(200) .json({ message: "Login successful", ExistUser:user });
  }
   catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
