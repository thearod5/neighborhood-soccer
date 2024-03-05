# Entities

ID = UUID probably
Location = "string" | Some thing else.
Image = "Link to bucket"

User {
id: ID;
profileImage: Image;
firstName: string;
lastName:string;
email:string;
phone: string;
password: string;
}

UserInfo = PartialExclude<User, "password">

EventChannel { // A group of events with defaults but whose events can vary.
id: ID;
defaultImage: Image;
description: string;
defaultLocation: Location;
defaultStartTime: DateTime;
defaultEndTime: DateTime;
messages: Message[];
}

Event { // Instance of event channel, with possibly changed fields.
id: ID;
channel: EventChannel;
image: Image;
location: Location;
startTime: DateTime;
endTime: DateTime;
registrations: EventRegistration[];
messages: Message[];
}

Message { // Message to event or channel.
id: ID;
user: User;
body: string;
}

EventRegistration {
id: ID
status: "registered" | "waitList";
waitListPosition: number?;
user: UserInfo;
}

# API

- Create / Update Account
- Update Password
- Create / Update Event
- Create Event Registration
- Update Event Registration
