import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FetchOld from "./pages/FetchOld";
import FetchRQ from "./pages/FetchRQ";
import MainLayout from "./components/Layout/MainLayout";
import "./App.css";
import { QueryClient,  QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,  
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "trad",
        element: <FetchOld />,
      },
      {
        path: "rq",
        element: <FetchRQ />,
      },
    ],
  },
]);

function App() {

  const queryClient = new QueryClient();

  return(
  
  <QueryClientProvider client={queryClient}> 
  
  <RouterProvider router={router} />
  </QueryClientProvider>
)}

export default App;
