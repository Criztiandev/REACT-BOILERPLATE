import { createBrowserRouter } from "react-router-dom";
import UserDashboard from "./page/dashboard";

const userRoutes = createBrowserRouter([
  { path: "/", element: <UserDashboard /> },
]);

export default userRoutes;
