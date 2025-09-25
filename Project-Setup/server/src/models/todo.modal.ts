import mongoose, { Schema, Document } from "mongoose";

// Define the shape of a Todo document
export interface ITodo extends Document {
  title: string;
  description?: string; // optional
  completed: boolean;
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
    description: {
      type: String,
      default: "", // optional, defaults to empty string
    },
    completed: {
      type: Boolean,
      default: false, // default to not completed
    },
  },
  { timestamps: true }
);

// Create the model
const Todo = mongoose.model<ITodo>("Todo", TodoSchema);

export default Todo;
