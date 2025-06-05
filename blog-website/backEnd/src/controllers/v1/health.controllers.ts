import { Request, Response } from "express";





export async function health(request: Request, response: Response) {
  response.json({ message: "server is healthy" });
}




export async function Image(request: Request, response: Response) {

  console.log("Body:", request.body);
  const file = (request as any).file; // Temporary fix
  console.log("Uploaded file:", file.path);  // checking the Image path 

  response.json({ message: "Image uploaded successfully" });
}
