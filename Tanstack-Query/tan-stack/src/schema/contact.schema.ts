import { z } from "zod"

 export const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
  country: z.string({ message: "Please select a country." }),
 gender: z.enum(["male", "female", "other"], {
  message: "Please select your gender.",
}),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept terms and conditions.",
  }),
})

export type FormSchema = z.infer<typeof formSchema>