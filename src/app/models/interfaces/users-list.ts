import { IUserData } from "./user-data";

export interface IUsersList {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUserData[];
}
