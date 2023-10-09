import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IdPage, { loader as IdLoader } from "./pages/IdPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "todo/:id",
    element: <IdPage />,
    loader: IdLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
