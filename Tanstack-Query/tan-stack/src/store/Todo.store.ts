import { create } from "zustand";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],

  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  toggleComplete: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));

export default useTodoStore;
