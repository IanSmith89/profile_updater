# Angular User Profile Updating

### Startup Instructions

1. `git clone git@github.com:IanSmith89/profile_updater.git`
1. `cd profile_updater`
1. `npm install`
1. `npm test`
1. `npm start`
1. `npm run e2e`

### User Story: Abby's Quest to Update

- Abby is a frequent user who wants to update her profile without having to deal with unhelpful error messages or restraints. She wants to be kindly reminded if a username or email is already taken in the system when she tries to update. She also wants a layer of security in the form of a password confirmation field before saving.

- Tasks:
  - Populate form on load with user information from server
  - Display error messages if username or email already exists
  - Do not overwhelm user with error states
  - Disable save button when form is invalid/incomplete
  - Clicking cancel button refreshes form to initial state

### Testing

- I used unit tests with Mocha, Chai, and Supertest to check the functionality of the server requests.
- Using Protractor, I attempted to make e2e tests on the Angular code. I was able to test some basic functionality.

### Thoughts on John Papa Style

- What I like: The naming conventions he recommends are explicit and meaningful. Enforcing modularity makes sense with Angular applications and the overall project architecture he recommends has helped me understand how controllers relate to services and views. Using named functions instead of anonymous callbacks is also something I like to employ in my coding. Controller as syntax is also something I've employed since learning about it.

- What I don't like: Although the architecture he recommends is meaningful and structured, it's a little harder to employ in smaller applications. I like separating controllers and views into a directory based on their resource but sometimes find that the separation can be somewhat confusing.

- What have I learned: I like the method of injecting dependencies using `$inject` instead of inlined array annotation. Prior to this project, I hadn't followed the exact file naming syntax he recommends. I also really liked the recommendation of only using factories because their structure is now easier and clear to understand.

### Retrospective

Overall I really enjoyed this process of creating a user profile form that displays meaningful and helpful validation errors. I am excited to start using e2e tests in the future and would have liked to do more for the project.
