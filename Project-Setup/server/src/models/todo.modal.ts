import mongoose, { Schema, Document } from "mongoose";

// Define the shape of a Todo document
export interface ITodo extends Document {
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const TodoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model
const Todo = mongoose.model<ITodo>("Todo", TodoSchema);

export default Todo;
