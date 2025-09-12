"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function ProfileForm() {
 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    
  })

  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}


// "use client"
// import React from 'react'
// import {useForm } from 'react-hook-form'

// const page = () => {

//     const {register, handleSubmit, formState: { errors }, watch} = useForm(
//         {
//             defaultValues: {
//                 name: 'sheryasrao',
//                 email: 'sheryasrao@example.com',
//                 message: 'Hello, I am interested in your services.'
//             }
//         }
//     );
//   return (
//     <div>
//       <form onSubmit={handleSubmit((data) => console.log(data))}>
       
// <input 
//   {...register("name", {
//     required: true,
//     minLength: {
//       value: 10,
//       message: "Name must be at least 10 characters"
//     },
//     maxLength: {
//       value: 13,
//       message: "Name cannot exceed 13 characters"
//     }
//   })} 
//   type="text" 
//   placeholder='Name' 
// />
// {errors.name && <span>{errors.name.message}</span>}


//         <br />
//         <input {...register("email", {required:true} )} type="email" placeholder='Email' />
//         {errors.email && <span>This field is required</span>}
//         <br />
//         <textarea {...register("message", {required:true})} placeholder='Message'></textarea>
//         {errors.message && <span>This field is required</span>} 
//         <br />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default page
