import Auth from "../Modal/AuthModal";
import { UserSignupInput } from "../Types/AuthTypes";

export const signUpService = async (userData: UserSignupInput) => {
  const newUser = await Auth.create(userData);
  return newUser;
};

