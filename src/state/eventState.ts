import { Event } from "domain/event";
import { makeAutoObservable } from "mobx";
import { defaultEvents } from "testData/testEvents";

class EventState {
  selectedEvent: Event | null = defaultEvents[0];
  events: Event[] = defaultEvents;

  constructor() {
    makeAutoObservable(this);
  }

  addEvent(event: Event) {
    this.events.push(event);
  }

  selectEvent(event: Event) {
    this.selectedEvent = event;
  }

  deselectEvent() {
    this.selectedEvent = null;
  }
}

export const eventState = new EventState();
