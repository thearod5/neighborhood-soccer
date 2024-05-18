import EventMockData from "../content/mockdata.json";

export interface MeetupMember {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface MeetupEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  link: string;
  dateTime: string;
  price: number;
  hosts: MeetupMember[];
  imageUrl: string;
  spotsTaken: number;
  spots: number;
}

export function getEvents(): Promise<MeetupEvent[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const events = EventMockData["data"]["groupByUrlname"]["upcomingEvents"][
        "edges"
      ]
        .map((e) => e["node"])
        .map((e) => {
          return {
            id: e["id"],
            title: e["title"],
            description: e["description"],
            link: e["eventUrl"],
            location: e["venue"]["address"],
            dateTime: e["dateTime"],
            price: e["feeSettings"]["amount"],
            imageUrl: e["image"]["source"],
            spotsTaken: e["going"],
            spots: e["maxTickets"],
            hosts: e["hosts"].map((h) => {
              const imageUrl = h["memberPhoto"]["source"];
              return {
                id: h["id"],
                name: h["name"],
                imageUrl: imageUrl == null ? undefined : imageUrl,
              };
            }),
          };
        });
      resolve(events);
    }, 1000); // Simulates a 1-second delay
  });
}
