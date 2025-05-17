import { Request, Response } from "express";
import Auth from "../Modal/AuthModal";


async function SignUp(req: Request, res: Response): Promise<void> {
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


    

res.status(200).json({message:"user is successfully singup", newUser:newUser})
  } catch (error) {
    console.log(`their is an error in signup ${error}`);
    res.status(400).json(`their is an error in signup ${error}`);
  }
}


async function SignIn(req: Request, res: Response): Promise<void> {


  const user = req.body;

  if (user.email === Auth.email &&  user.password) {
    console.log("you data is valid");
  } else {
    console.log(`please enter email and password to start`);
  }

  try {
    const User = await Auth.findOne();
res.status(200).json({message:"user is successfully singin", User:User})
  } catch (error) {
    console.log(`their is an error in SignIn ${error}`);
    res.status(400).json(`their is an error in SignIn ${error}`);
  }
}


export default {
    SignUp,
    SignIn

}