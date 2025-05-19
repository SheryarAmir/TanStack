import { Request, Response } from "express";
import Auth from "../Modal/AuthModal";
import { env } from "process";

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
      password: user.password,
    });

// const Secret=process.env.JWT_SECRET;
// if(!Secret)res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"any error in sign JWT Token"})
//     const accessToken=JWT.sign({email}, Secret)
//     res
//       .status(HttpStatus.CREATED)
//       .json({ message: "user is successfully singup", newUser: newUser ,accessToken:accessToken });


  } catch (error) {
    console.log(`their is an error in signup  ${error}`);
    res
      .status(HttpStatus.CONFLICT)
      .json(`their is an error in signup ${error}`);
  }
}

export async function SignIn(req: Request, res: Response): Promise<void> {
  const ExistUser = req.body;
  // const {email ,password}= req.body

  try {
    const existingUser = await Auth.findOne({ ExistUser });

    if (existingUser) {
      console.log("user is allready exist");
      res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: "user is allready exist" });
    }
    res.status(HttpStatus.OK).json({ ExistUser: ExistUser });
  } catch (error) {
    console.log(`their is error in signin`);
    res
      .status(HttpStatus.CONFLICT)
      .json(`their is an error in SignIn ${error}`);
  }
}

