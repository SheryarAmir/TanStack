import { api } from "@/lib/axios";
import { AuthTypes} from "@/types/AuthTypes";


export const registerUser = async (user: AuthTypes) => {
  const res = await api.post("/signup", user);
    console.log(res.data.newUser);
  return res.data.newUser;
};


export const loginUser = async (user:any) => {
  const res = await api.post("/signin", user);
  console.log(res.data.ExistUser);
  return res.data.ExistUser;
};
