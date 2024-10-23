import { RouterProvider } from "react-router-dom";
import { IAccountSchema } from "./feature/shared/account/account.interface";
import userRoutes from "./feature/user/user.routes";
import adminRoutes from "./feature/admin/admin.routes";
import { useEffect } from "react";
import useAuthStore from "./feature/public/auth/store/auth.store";
import authRoutes from "@/feature/public/auth/auth.routes";

const roleMap: Record<IAccountSchema["role"], any> = {
  user: userRoutes,
  admin: adminRoutes,
};

const App = () => {
  const { credentials, setCredentials } = useAuthStore();

  useEffect(() => {
    setCredentials({ UID: "1", role: "admin", token: "123123" });
  }, []);

  const _preferedRoute = credentials ? roleMap[credentials.role] : authRoutes;

  return <RouterProvider router={_preferedRoute} />;
};

export default App;
