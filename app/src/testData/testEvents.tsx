import { Event } from "domain/event";
import { adminUser } from "./testUsers";
export const defaultEvents: Event[] = [
  // Example events data
  {
    id: 1,
    imageUri:
      "https://as1.ftcdn.net/v2/jpg/01/82/42/54/1000_F_182425403_3xPvzl7TXsPf1Z1Prn9OGAArwYgY7EB1.jpg",
    title: "Friday Night Soccer",
    location: "Harrison Park",
    description: "Small goal pickup",
    startTime: "8:00 PM",
    endTime: "9:30 PM",
    spotsLeft: 5,
    users: [adminUser],
  },
  {
    id: 2,
    imageUri:
      "https://as1.ftcdn.net/v2/jpg/01/82/42/54/1000_F_182425403_3xPvzl7TXsPf1Z1Prn9OGAArwYgY7EB1.jpg",
    title: "WoSo Soccer Night",
    location: "Rauner Park",
    description: "Friendly match at the local park.",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    spotsLeft: 5,
    users: [adminUser],
  },
];
