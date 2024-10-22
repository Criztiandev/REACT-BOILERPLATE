import { createBrowserRouter, Navigate } from "react-router-dom";
import UserDashboard from "./page/dashboard";

const userRoutes = createBrowserRouter([
  { path: "*", element: <Navigate to="/" replace /> },
  { path: "/", element: <UserDashboard /> },
]);

export default userRoutes;
