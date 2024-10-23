import { IAccountSchema } from "@/feature/shared/account/account.interface";

export interface IStoredCredentials extends Pick<IAccountSchema, "role"> {
  UID: string;
  token: string;
}

export interface IAuthStore {
  credentials: IStoredCredentials | null;
  setCredentials: (value: IStoredCredentials) => void;
  removeCredentials: () => void;
}
