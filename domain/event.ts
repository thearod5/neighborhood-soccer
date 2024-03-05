import { UserInfo } from "domain/user";
type UUID = string;
type Image = string;
type Location = string | { [key: string]: any }; // "string" or another structure
type DateTime = string;
/**
 * Message to Event or Event Channel or Team or Organization.
 */
export interface Message {
  id: UUID;
  user: UserInfo;
  body: string;
}
/**
 * Grouping of events. Provides default behavior.
 */
export interface EventChannel {
  id: UUID;
  defaultImage: Image;
  description: string;
  defaultLocation: Location;
  defaultStartTime: DateTime;
  defaultEndTime: DateTime;
  defaultMaxRegistrations: number;
  messages: Message[];
}

/**
 * Instance of event channel.
 */
export interface Event {
  id: UUID;
  channel: EventChannel;
  imageUri: Image;
  location: Location;
  startTime: DateTime;
  endTime: DateTime;
  maxRegistrations: number;
  registrations: EventRegistration[];
  messages: Message[];
}

/**
 * A event registration including wait listing.
 */
export interface EventRegistration {
  id: UUID;
  status: "registered" | "waitList";
  waitListPosition?: number; // Optional, thus using "?"
  user: UserInfo;
}
