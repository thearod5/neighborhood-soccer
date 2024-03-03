# User Stories

1. As a user, I want to be able to create an account.
2. As a user, I want to be able to register for events.
3. As an admin, I want to be able to create an event.
4. As an admin, I want to be able to verify that a user has registered for the event.

# Flow

## Account Setup

1. Landing on Account Setup Page
2. User types in username
3. Display user options
   1. If username exists, then show password
   2. If username does not exist, then show email and password

## Signing up for event

1. Open app
2. Landing page
   1. (If account exists) -> Link to events
   2. (Else) -> Link to `Account Setup`
3. User selects events
4. Event list is displayed.
5. User selects event
6. User selects register button
7. User completes registration information
8. User completes payment on stripe page.
9. Registration confirmation is displayed.


# TODO

- [ ] Create registration page
- [ ] Create stripe account
- [ ] Create deployment account and payment setup
- [ ] Setup BEND

- [x] Convert to type script.
- [x] Create store for holding user.
- [x] Automatic typescript integration in IDE.
- [ ] Create registration page
- [ ] Find better way to enforce non-auth access
- [ ] Create common styling for pages
- [ ] Be able to easily debug pages
