import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "@/pages/dashboard";
import LoginPage from "@/pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
