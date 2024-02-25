import {UserInfo} from "domain/user"
export interface Event {
  id: number;
  imageUri: string;
  title: string;
  location: string;
  description: string;
  startTime: string;
  endTime: string;
  spotsLeft: number;
  users: UserInfo[]
}
