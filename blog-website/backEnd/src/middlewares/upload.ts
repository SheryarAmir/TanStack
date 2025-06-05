import multer from "multer"; // install multer package
import { Request } from "express";

const storage = multer.diskStorage({   // create a storage for image we can two properties. 
  destination: function (  //This key tells Multer where to save the uploaded files (i.e., which folder).
    _req: Request,
    _file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) {
    cb(null, './uploads');  // if error null or if success create a folder name uploads
  },
  filename: function (//  What name to give to the file This key tells Multer how to name the uploaded file.
    _req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });  //You're telling multer to use the custom storage settings you defined earlier (with destination and filename).

export default upload;
