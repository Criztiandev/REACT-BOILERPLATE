import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "./page/dashboard";

const adminRoutes = createBrowserRouter([
  { path: "/", element: <AdminDashboard /> },
]);

export default adminRoutes;
