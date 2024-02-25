# Use Cases

1. As a user, I want to be able to create an account
2. As a user, I want to be able to register for events
    1. The system shall require users to be logged in.
    2. The system shall finish registration once the user has paid.
    3. The system shall be able to prove that a user has paid for an event.
    4. The system will put users on the wait list if the event is full.
        1. The system shall not charge users that were added to the wait list.
3. As an admin, I want to be able to verify that a user has registered for the event.
    1. The system shall provide a way for admin to quickly check-in users that are registered for an event.

# TODO

- [x] Convert to type script.
- [ ] Create store for holding user.
- [ ] Find better way to enforce non-auth access
- [ ] Automatic typescript integration in IDE.