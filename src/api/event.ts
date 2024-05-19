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

export async function getEvents(): Promise<MeetupEvent[]> {
  try {
    const response = await fetch(
      "https://neighborhood-soccer-api-3f8d1edcd404.herokuapp.com/meetup/events",
      {
        method: "GET",
        headers: {
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const events: MeetupEvent[] = data["events"];
    return events;
  } catch (e) {
    console.log(e);
    return [];
  }
}
